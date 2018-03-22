function rgb2yuv(imagemEntrada);

I=imread(imagemEntrada);
figure(1); 
imshow(I); title('Original Image');

R=I(:,:,1); figure(2),imshow (R); title('Red Image');

G=I(:,:,2); figure(3),imshow(G); title('Green Image');

B=I(:,:,3); figure(4),imshow(B); title('Blue Image');

Y = 0.299 * R + 0.587 * G + 0.114 * B;

figure(5),imshow(Y); title('Luminance Image');

U = -0.14713 * R - 0.28886 * G + 0.436 * B;

figure(6),imshow(U+128);title('U Image');

V = 0.615 * R - 0.51499 * G - 0.10001 * B;

figure(7),imshow(V+128);title('V Image');

YUV = cat(3,Y,U,V);

figure(8),imshow(YUV);title('YUV Image');

R = Y + 1.139834576 * V;

G = Y -.3946460533 * U -.58060 * V;

B = Y + 2.032111938 * U;

RGB = cat(3,R,G,B);

figure(9),imshow(RGB);title('RGB Image');