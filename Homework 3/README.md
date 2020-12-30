# [Homework 3](http://cv2.csie.ntu.edu.tw/CV/hw2019/hw3.html)
###### Histogram Equalization
### Due Date: 10/13
### Description
Write a program to generate images and  histograms:
 * (a) original image and its histogram
 * (b) image with intensity divided by 3 and its histogram
 * (c) image after applying histogram equalization to (b) and its histogram
### Announcement
 * You may use any programming language of your choice to implement the functions required in assignment #3, provided that you do not use any library calls except for basic image IO (e.g. OpenCV).
 * Grading policy
   * Please include the histogram of the final image. (As in the previous assignment).
   * You have to draw the histogram. The part where you calculate the histogram must be done hardcored, but you may output your statistics data to a file and use auxiliary program to assist you in drawing the bar graphs, i.e., Excel, gnuplot, sigmaplot, matplotlib, matlab.
 * Hint: You can use any programing language to implement homework. However don't just call libraries, if just call libraries you will get zero point.
### FAQ
1. 有規定報告的頁數嗎?
   
   沒有，但建議不要超過4頁。報告內容簡短扼要即可。
   
2. 請問這次作業中二部分，把所有亮度除以三是指無條件捨去或四捨五入嗎??
   
   是的，無條件捨去或四捨五入都可以哦，每個pixel都是0-255的整數。
   
3. 如果讀檔時的格式是彩色，即rgb值相同的三個通道，那計算 histogram 是取其中一個通道的值加總就好還是三個通道一起計算？
   
   如果讀檔是格式是彩色，三個通道要個別計算唷，但最後附上的 histogram 可以取一個通道代表即可。
   
   建議直接用灰階讀檔即可。
   
4. 請問做出來的結果圖大概長怎樣？
   
   做出來的影像可以參照 HW3 封面，分別是b和c的結果圖。
   
5. 請問報告總共要多少張圖？
   
   三張圖和三張對應的直方圖共6張哦。
   
6. 請問可以用numpy一次處裡多個像素嗎? 像是用np.histogram, np.cumsum等函式？
   
   np.histogram 不能用，np.cumsum 可以。
   
   本次希望實作 histogram equalization，故 histogram 必須手刻。
   
   作圖的部分 可以call functions.
   
7. 請問之前作業實作過的函式，以後作業可以直接 call 現成函式嗎?
   
   可以哦，如果是之前作業手刻過的函式，之後用到可以任意 call function.
   
