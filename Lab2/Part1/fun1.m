function[]=fun1(ficheiroOriginal)

%1-importe uma imagem com o formato bitmap (espa?o de cores RGB) e apresente essa imagem no ecr?%;
im= imread(ficheiroOriginal);
figure(1);
imshow(im)
title('Original Image'); 

%2-separe cada componente RGB numa matriz diferente e apresente no ecr? cada uma delas%
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

%3-converta essa imagem para o espa?o de cores HSV e apresente essa imagem no ecr?
hsvIm = rgb2hsv(im);

figure(5);
imshow(hsvIm);
title('HSV Image');

%4-separe cada componente HSV numa matriz diferente e apresente no ecr? cada uma delas
h = hsvIm(:,:,1);
s = hsvIm(:,:,2);
v = hsvIm(:,:,3);

figure(6);
imshow(h)
title('Hue Image'); 

figure(7);
imshow(s)
title('Saturation Image');

figure(8);
imshow(v)
title('Value Image');

end