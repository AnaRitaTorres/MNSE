function[]=fun2(ficheiroOriginal)

%1-importe uma imagem com o formato bitmap (espaco de cores RGB) e apresente essa imagem no ecra
im= imread(ficheiroOriginal);
figure(1);
imshow(im)
title('Original Image'); 

%2-separe cada componente RGB numa matriz diferente e apresente no ecra cada uma delas
r = im(:, :, 1);
g = im(:, :, 2);
b = im(:, :, 3); 

figure(2);
imshow(r)
title('Red Image'); 

figure(3);
imshow(g)
title('Green Image');

figure(4);
imshow(b)
title('Blue Image');

%3-converta essa imagem para o espaco de cores YCbCr e apresente essa imagem no ecra

ycbcr = rgb2ycbcr(im);

figure(5);
imshow(ycbcr)
title('YCbCr Image');

%4-separe cada componente YCbCr numa matriz diferente e apresente no ecra cada uma delas
y = ycbcr(:,:,1);
cb = ycbcr(:,:,2);
cr = ycbcr(:,:,3);

figure(6);
imshow(y)
title('Luminance Image'); 

figure(7);
imshow(cb)
title('Blue-difference Image');

figure(8);
imshow(cr)
title('Red-difference Image');
