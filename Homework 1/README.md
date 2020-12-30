# [Homework 1](http://cv2.csie.ntu.edu.tw/CV/hw2019/hw1.html)
###### Basic Image Manipulation
### Due Date: 9/29
### Description
Part1. Write a program to do the following requirement.

Part2. Write a program or use software to do the following requirement.
 * (a) upside-down lena.bmp
 * (b) right-side-left lena.bmp
 * (c) diagonally flip lena.bmp
 * (d) rotate lena.bmp 45 degrees clockwise
 * (e) shrink lena.bmp in half
 * (f) binarize lena.bmp at 128 to get a binary image
### Announcement
 * You may use any programming language of your choice to implement the functions required in assignment #1, provided that you do not use any library calls except for basic image IO (e.g. OpenCV).
 * For part 2, you can use any image processing software. In your report, you must specify which software you used to obtain the required results.
 * Grading policy
 * Hint: You can use any programing language to implement homework. However don't just call libraries, if just call libraries you will get zero point.
### FAQ
1. 作業是否可以用numpy一次處理多個像素?
   
   可以，如python numpy.ndarray.T或是matlab的 A'。
   
   但是不能使用像是opencv的flip、getRotationMatrix2D、threshold等現成函式。
   
2. 請問作業報告格式可以是word嗎?
   
   統一格式為PDF，可將word轉為PDF上傳。報告要包含part1, part2共六張圖片。
   
3. 有規定報告的頁數嗎?
   
   沒有，但建議不要超過4頁。
   
4. 請問投影片中的 hvision.h 和 B_PIX 要如何使用?
   
   hvision.h 和 B_PIX 是多年前比較舊的套件，不推薦使用。
   
   建議可以用C++ 或 python 的 OpenCV、Matlab 來實作此次作業。
   
5. 請問如何繳交作業?
   
   用 Filezilla client 登入  (IP: 140.112.31.83, account: 2020cv1, password: 2020cv1, port: 12000) 
   
   將作業上傳到指定資料夾內。
   
6. 請問作業(c)對角線是哪一條? (d)旋轉45度以後的圖片大小為何? (e)縮小一半是邊長還是面積?
   
   (c)兩條都可以。 (d)都可以，看得出來有旋轉即可，邊角被切掉也可以。 (e) 邊長。
   
7. 為了排版可以在報告中調整影像大小嗎?
   
   可以哦。
   
8. 壓縮檔內要附上原圖嗎?
   
   不用哦，報告中有展示圖片即可。
   
9. 請問Output的格式有限制嗎?
   
   沒有限制哦，jpg、bmp、png等都可以。
   
10. 請問part2用如果也用程式寫，是否有限定函式?
   
    沒有限制哦，如果part2要用程式來完成，並不限制函式。
   
11. Part1.(c) 的 diagonal mirrored 是要鏡射還是翻轉?
   
    因為有許多同學會有誤會，因此我們將題目改成 diagonal flip，是要對角的翻轉
   
