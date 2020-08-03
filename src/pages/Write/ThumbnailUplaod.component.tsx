import React, { useRef, useState, ChangeEvent } from 'react';

import Button from '#Custom/Button/Button.component';
import Icon from '#Icon/Icon.component';
import DragAndDrop from '#Custom/DragAndDrop/DragAndDrop.component';

import { Container, ButtonContainer, HiddenInput, PreviewImage } from './ThumbnailUpload.styles';

const ThumbnailUpload = () => {
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | ArrayBuffer | null>(null);

  const handleFileOpen = () => {
    if (hiddenInputRef.current) {
      hiddenInputRef.current.click();
    }
  };

  const readFileAndSetPreviewImage = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFile(e.target.files[0]);
      e.preventDefault();

      const file = e.target.files[0];
      readFileAndSetPreviewImage(file);
    }
  };

  return (
    <DragAndDrop dropCallback={readFileAndSetPreviewImage}>
      <Container>
        <ButtonContainer>
          <HiddenInput
            ref={hiddenInputRef}
            type="file"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="profile_img"
            onChange={handleFileInput}
          />
          {imagePreviewUrl ? (
            <PreviewImage src={imagePreviewUrl as string} onClick={handleFileOpen} />
          ) : (
            <>
              <Icon icon="picture" size="100" />
              <Button theme="hover" size="medium" onClick={handleFileOpen}>
                <span>썸네일 업로드</span>
              </Button>
            </>
          )}
        </ButtonContainer>
      </Container>
    </DragAndDrop>
  );
};

export default ThumbnailUpload;
