import json
import os
import mimetypes


def compact(directory):
    for name in os.listdir(directory):
        path = os.path.join(directory, name)
        if os.path.isdir(path):
            compact(path)
        elif os.path.isfile(path):
            if mimetypes.guess_type(path)[0] == "application/json":
                with open(path, "r+") as f:
                    data = json.load(f)
                    s = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
                    f.truncate(0)
                    f.seek(0)
                    f.write(s)


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--directory", "-d", default=os.getcwd(), help="Specify alternative directory " "[default:current directory]"
    )
    args = parser.parse_args()

    compact(args.directory)
