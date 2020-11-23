# Homework 7
##### Thinning
### Due Date: 11/24
### Description
Write a program which does thinning on a downsampled image (lena.bmp).
### Announcement
 * Downsampling Lena from 512x512 to 64x64:
   Binarize the benchmark image lena as in HW2, then using 8x8 blocks as a unit, take the topmost-left pixel as the downsampled data.
 * You have to use 4-connected neighborhood detection.
 * You can use any programing language to implement homework, however, you'll get zero point if you just call existing library.
 * More detail about this homework. Download here-->[PPT](http://cv2.csie.ntu.edu.tw/CV/_material/CV1_CH6_2018_thinning-operator.pptx)|[PDF](http://cv2.csie.ntu.edu.tw/CV/_material/CV1_CH6_2018_thinning-operator.pdf)
### FAQ
1. 作法要以上課PPT還是這裡提供的PPT為主？
   
   作業請參考Announcement(此網頁)提供的PPT為主。
2. 有規定報告的頁數嗎?
   
   沒有，但建議不要超過4頁。報告內容簡短扼要即可。
3. 請問之前作業實作過的函式，以後作業可以直接 call 現成函式嗎?
   
   可以哦，如果是之前作業手刻過的函式，之後用到可以任意 call function.
4. 投影片第109頁似乎不太正確?
   
   正確結果請參考外面的動圖。
5. 結果需要像外面的動圖，還是最後Thinning完成的結果?
   
   Thinning完成的結果圖就可以了。
6. 先Binarize還是先Downsample?
   
   都可以。
7. Step1 是要用上課投影片的 marked-interior/border-pixel operator，還是使用 Yokoi，來產生 Pair relationship operator 所需要的圖
   
   照此網頁提供的ppt所寫，用 Yokoi
8. Padding 有限定使用哪種方式嗎?
   
   補什麼都可以
