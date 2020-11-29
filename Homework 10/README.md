# [Homework 10](http://cv2.csie.ntu.edu.tw/CV/hw2019/hw10.html)
###### Zero Crossing Edge Detection
### Due Date: 12/15
### Description
Implement 2 Laplacian Mask, Minimum Variance Laplacian, Laplacian of Gaussian, and Difference of Gaussian(inhibitory sigma=3, excitatory sigma=1, kernel size 11x11).
 * (僅供參考，同學可自己找出 Edge Image 品質最佳的門檻值threshold value)
 * Laplace Mask1 (0, 1, 0, 1, -4, 1, 0, 1, 0): 15
 * Laplace Mask2 (1, 1, 1, 1, -8, 1, 1, 1, 1)
 * Minimum variance Laplacian: 20
 * Laplace of Gaussian: 3000
 * Difference of Gaussian: 1
### Announcement
 * You can use any programing language to implement homework, however, you'll get zero point if you just call existing library.
### FAQ
1. 有規定報告的頁數嗎?
   
   建議不超過4頁，報告要包含5張結果圖及其所用閥值。
   
2. 請問之前作業實作過的函式，以後作業可以直接 call 現成函式嗎?
   
   可以哦，如果是之前作業手刻過的函式，之後用到可以任意 call function.
   
3. Threshold value可以自已決定嗎?
   
   是的，可以自行選擇threshold的值來得出較好的結果。
   
4. 請問有相關的結果圖或更詳細的作業內容說明嗎?
   
   Sure, 請參照 [hw9-hw10作業說明(v4)](http://cv2.csie.ntu.edu.tw/CV/_material/CH7_HW9_10%E8%AC%9B%E8%A7%A3(v4).pdf)
