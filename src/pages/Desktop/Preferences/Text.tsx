import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Mảng các môn thể thao
const initialSports = [
  { key: "1", content: "Bóng đá" },
  { key: "2", content: "Poker" },
  { key: "3", content: "Bóng rổ" },
  { key: "4", content: "Thể Thao Điện Tử" },
  { key: "5", content: "Bitcoin" },
  { key: "6", content: "Quần vợt" },
  { key: "7", content: "Cầu lông" },
  { key: "8", content: "Cricket" },
  { key: "9", content: "Kabaddi" },
  { key: "10", content: "Bóng chuyền" },
  // Bạn có thể thêm tiếp các môn thể thao còn lại từ initialSports vào đây
];

function Text() {
  const [sports, setSports] = useState(initialSports);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(sports);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setSports(items);
  };

  return (
    <div>
      <h1>Danh sách môn thể thao</h1>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="sports-list">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {sports.map(({ key, content }, index) => (
                <Draggable key={key} draggableId={key} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        userSelect: "none",
                        padding: "16px",
                        margin: "0 0 8px 0",
                        backgroundColor: "#f0f0f0",
                        borderRadius: "4px",
                        border: "1px solid #ddd",
                        ...provided.draggableProps.style,
                      }}
                    >
                      {content}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default Text;
