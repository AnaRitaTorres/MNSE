function alt_seg(inputImage,inputImage2,outputImage)

%le a imagem de input e mostra no ecra
A=imread(inputImage);
B=imread(inputImage2);
figure(1);
imshow(A)
title('Original Image'); 

%obter as dimensoes da matriz
[height, width,planes] = size(A);

%separa as componentes RGB e mostra-as no ecra
r = A(:, :, 1);            
g = A(:, :, 2);            
b = A(:, :, 3); 
figure(2)
imshow([r g b])
title('RGB Components');

%fator de blueness
blueness = double(b) - max(double(r), double(g));
figure(3)
imshow(uint8(blueness));

%histograma de blueness
figure(4)
imhist(uint8(blueness));
title('B Channel Histogram');

%pedir threshold
threshold=input('Which threshold?');

foregroundObjects=blueness<threshold;

%mostrar a imagem preta e branca segmentada
figure(4)
imshow(foregroundObjects)
title('B&W Segmented Object');

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