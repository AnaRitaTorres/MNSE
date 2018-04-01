function basic_seg(inputImage,inputImage2,outputImage)

%le a imagem de input e mostra no ecra
A=imread(inputImage);
B=imread(inputImage2);
figure(1);
imshow(A)
title('Original Image'); 

%obter as dimensoes da matriz
[height, width,planes] = size(A);

disp(height)
disp(width)
%separa as componentes RGB e mostra-as no ecra
r = A(:, :, 1);            
g = A(:, :, 2);            
b = A(:, :, 3); 
figure(2)
imshow([r g b])
title('RGB Components');

%histograma da componente azul
figure(3)
imhist(b)
title('B Channel Histogram');

%pedir threshold
threshold=input('Which threshold?');

%geracao da nova matriz para valores abaixo do threshold
c=zeros(height, width);
for i=1:height
    for j=1:width
        if(b(i,j)<threshold)
            c(i,j)=255;
        end
    end
end

% obter a representacao colorida dos objetos do 1º plano
foregroundR=zeros(height, width);
foregroundG=zeros(height, width);
foregroundB=zeros(height, width);

for i=1:height
    for j=1:width
        if(b(i,j)<threshold) 
            foregroundR(i,j)=r(i,j);
            foregroundG(i,j)=g(i,j);
            foregroundB(i,j)=b(i,j);
        end
    end
end
foregroundRGB=cat(3,uint8(foregroundR),uint8(foregroundG),uint8(foregroundB));

%mostra imagem colorida
figure(4)
imshow(foregroundRGB)
title('coloured segmented object');

%usa imfuse
fusedIm = imfuse(foregroundRGB,B,'blend','Scaling','joint');
figure(5)
imshow(fusedIm)

%guarda a imagem
imwrite(fusedIm,outputImage)