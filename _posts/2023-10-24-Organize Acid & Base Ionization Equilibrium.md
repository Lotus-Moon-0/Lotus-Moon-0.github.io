---
layout: post
postID: OA&BIE231024
title: 整理不同情况下酸碱平衡公式
title-color: rgb(0,0,0)
subtitle: Ionization Equilibrium of Weak Acid and Base
date: 2023-10-24
author: Lotus Moon
header-img: img/post-bg-periodictable.jpg
mathjax: true
tags:
  - Chemistry
  - Equilibrium
  - Organize
---

## Buffer 缓冲溶液
**弱酸**（或其**酸根离子**）加其所**对应**的盐 或 **弱碱**加其所**对应**的盐  
对于酸
\$$pH = pK_a - lg{C_a \over C_s}\$$
对于碱
\$$pOH = pK_b - lg{C_b \over C_s}\$$
## 盐类水解
**有弱才水解，越弱越水解**  
水解平衡常数 \$K_h\$  
强酸弱碱盐
\$K_h = {K_w \over K_b}\$  
强碱弱酸盐
\$K_h = {K_w \over K_a}\$  
弱酸弱碱盐
\$K_h = {K_w \over {K_a \cdot K_b} }\$

### 单水解反应（\${C_0 \over K_a} \gt 400\$或\${C_0 \over K_b} \gt 400\$）
对于弱酸盐
\$$[OH^-] = \sqrt { {K_w \over K_a} \cdot C_0}\$$ 
对于弱碱盐
\$$[H^+] = \sqrt { {K_w \over K_b} \cdot C_0}\$$ 

### 双水解反应
\$HA, MOH\$  
\$$[H^+] = \sqrt { {K_w \cdot K_a \cdot [M^+]} \over {K_a \cdot K_b + K_b \cdot [A^-]} }\$$
当\${C_0 \over K_h} \gt 400\$，\$[M^+] = [A^-] \approx C_0\$  
当\$C_0 \gt 20K_a\$，\$C_0 + K_a \approx C_0\$  
原式可化简为  
\$$[H^+] = \sqrt { {K_w \cdot K_a} \over K_b}\$$

## 质子守恒推导公式
### 一元弱酸（碱）
\$$[H^+] = \sqrt {K_a \cdot [HA] + K_w}\$$
经数据处理可得
\$$[H^+] = \sqrt {K_a \cdot C_0}\$$
\$$[OH^-] = \sqrt {K_b \cdot C_0}\$$

### 多元酸
\$$[H^+] = \sqrt {K_{a_1} \cdot [H_2A] + 2K_{a_2} \cdot [HA^-] + K_w}\$$
经数据处理可得
\$$[H^+] = \sqrt {K_{a_1} \cdot C_0}\$$

### 两性物质
\$NaHA\$  
\$$[H^+] = \sqrt { {K_{a_1} \cdot (K_{a_2}[HA^-] + K_w)} \over {K_{a_1} + [HA^-]} }\$$
经数据处理可得
\$$[H^+] = \sqrt {K_{a_1} \cdot K_{a_2}}\$$
\$$pH = {1 \over 2}(pK_{a_1} + pK_{a_2})\$$

### 两种弱酸混合
\$HA + HB\$  
\$$[H^+] = \sqrt {K_{a,HA}[HA] + K_{a,HB}[HB] + K_w}\$$
经数据处理可得
\$$[H^+] = \sqrt {K_{a,HA} \cdot C_{0,HA} + K_{a,HB} \cdot C_{0,HB}}\$$