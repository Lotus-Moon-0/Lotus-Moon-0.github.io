---
layout: post
postID: NoGB240217
title: 更新画廊步骤的笔记
subtitle: Notes on Gallery Building
date: 2024-02-17
author: Lotus Moon
header-img: img/home-bg-art.jpg
tags:
  - Note
  - Github
  - ImgBB
  - Gallery
---

## 一、图像处理

遇到体积较大的视频，可用格式工厂转为 GIF（640i，12fps），体积会大幅缩小。  
<img src="/img/inPost/NfGB240217/屏幕截图(1302).png" alt="1302" />  
若体积仍超过 ImgBB 单一照片限制，可用压缩工具处理。<a href="https://docsmall.com/image-compress">这个网站不错</a>

## 二、上传

为使排列按时间顺序  
1.按时间从近到远上传至 ImgBB  
2.就在上传完成的界面 copy 链接（HTML 详细链接），在这里是按你上传选择的顺序排的  
如在相册里选就乱了  
<img src="/img/inPost/NfGB240217/屏幕截图(1303).png" alt="1303" />

## 三、编入

1.在 gallery.yml 里在最前面 paste（这个图和下面那个图错了）  
<img src="/img/inPost/NfGB240217/屏幕截图(1304).png" alt="1304" />  
2.整理格式（加上每行 class="box", 闭上 img 标签），可用“更改所有匹配项”提高效率  
<img src="/img/inPost/NfGB240217/屏幕截图(1305).png" alt="1305" />

## 四、git push
