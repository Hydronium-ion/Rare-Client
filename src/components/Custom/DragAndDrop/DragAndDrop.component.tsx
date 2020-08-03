import React, { useRef, useLayoutEffect, ReactNode, useState } from 'react';

import { Container, Dragging, NotDragging } from './DragAndDrop.styles';

interface IDragAndDropProp {
  dropCallback: (file: File) => void;
  children: ReactNode;
}

const DragAndDrop = ({ dropCallback, children }: IDragAndDropProp) => {
  const dropRef = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);
  const [dragCount, setDragCount] = useState(0);

  const handleDragIn = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    setDragCount(dragCount + 1);
    if (e.dataTransfer && e.dataTransfer.items && e.dataTransfer.items.length <= 1) {
      setDragging(true);
    }
  };

  const handleDragOut = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    // setDragCount(formerDragCount => {
    //   if (formerDragCount === 1) {
    //     setDragging(false);
    //   }
    //   return formerDragCount - 1;
    // });
  };

  const handleDrag = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      e.dataTransfer.clearData();
      dropCallback(e.dataTransfer.files[0]);
      setDragCount(0);
    }
  };

  useLayoutEffect(() => {
    let div = dropRef.current;
    if (div) {
      div.addEventListener('dragenter', handleDragIn);
      div.addEventListener('dragleave', handleDragOut);
      div.addEventListener('dragover', handleDrag);
      div.addEventListener('drop', handleDrop);
    }
    return () => {
      let div = dropRef.current;
      if (div) {
        div.removeEventListener('dragenter', handleDragIn);
        div.removeEventListener('dragleave', handleDragOut);
        div.removeEventListener('dragover', handleDrag);
        div.removeEventListener('drop', handleDrop);
      }
    };
  }, []);

  return (
    <Container ref={dropRef}>
      {dragging ? <Dragging /> : <NotDragging />}
      {children}
    </Container>
  );
};

export default DragAndDrop;
