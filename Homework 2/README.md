# [Homework 2](http://cv2.csie.ntu.edu.tw/CV/hw2019/hw2.html)
###### Basic Image Manipulation
### Due Date: 10/6
### Description
Write a program to generate:
 * (a) a binary image (threshold at 128)
 * (b) a histogram
 * (c) connected components(regions with + at centroid, bounding box)
### Announcement
 * You may use any programming language of your choice to implement the functions required in assignment #2, provided that you do not use any library calls except for basic image IO (e.g. OpenCV).
 * Binarize Lena with the threshold 128 (0-127,128-255).
 * You have to draw the histogram. The part where you calculate the histogram must be done hardcored, but you may output your statistics data to a file and use auxiliary program to assist you in drawing the bar graphs, i.e., Excel, gnuplot, sigmaplot, matplotlib, matlab.
 * For the connected components, please use 500 pixels as a threshold. Omit regions that have a pixel count less than 500.
 * Grading policy
    * Failing to provide a report will reduce your grade by 1~2 levels.
    * Using restricted functions within your program (unless specified) will result in a failure of your work.
 * Hint: You can use any programing language to implement homework. However don't just call libraries, if just call libraries you will get zero point.
### FAQ
1. 畫十字、bounding box的部分可否直接call library?
   
   可以哦。 e.g. cv2.rectangle
   
   標示重心也可以用其他圖案標示像是實心圓等圖案，不一定要用十字，標示清楚即可。
   
2. Conneted components 要用四連通還是八連通?
   
   兩者皆可。惟報告需註明你用的是哪一種連通方式。
   
3. 有規定報告的頁數嗎?
   
   沒有，但建議不要超過4頁。報告內容簡短扼要即可。
   
4. (c)的結果圖bounding box 應該會有幾個?
   
   無論是4連通、8連通都是五個bounding box，請繳交之前再次確認。
   
   如果你的結果不是五個應該是你的程式寫錯或是你用面積500以外的數值來過濾conneted component。
   
5. 畫十字在重心是要依照第三周教的那個方法畫在所有相同label的重心，還是畫在框住相同label的最小矩形正中間即可?
   
   相同label之重心，不是矩形正中間。
   
6. 第三題找出 connected components 所用的圖，是否就是用第一小題 threshold=128 的結果?
   
   是的。
   
