import React from "react";

//YOUTUBE NESTED COMMENTS LOGIC

const commentsData = [
  {
    name: "Sunny Singh",
    text: "This is a dummy comment",
    replies: [
      {
        name: "Sunny Singh",
        text: "This is a dummy comment",
        replies: [],
      },
      {
        name: "Sunny Singh",
        text: "This is a dummy comment",
        replies: [
          {
            name: "Sunny Singh",
            text: "This is a dummy comment",
            replies: [
              {
                name: "Sunny Singh",
                text: "This is a dummy comment",
                replies: [
                  {
                    name: "Sunny Singh",
                    text: "This is a dummy comment",
                    replies: [],
                  },
                  {
                    name: "Sunny Singh",
                    text: "This is a dummy comment",
                    replies: [
                      {
                        name: "Sunny Singh",
                        text: "This is a dummy comment",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sunny Singh",
    text: "This is a dummy comment",
    replies: [],
  },
  {
    name: "Sunny Singh",
    text: "This is a dummy comment",
    replies: [],
  },
  {
    name: "Sunny Singh",
    text: "This is a dummy comment",
    replies: [],
  },
];

const Comments = ({ comments }) => {
  const { name, text, replies } = comments;
  return (
    <div className="flex bg-gray-100">
      <img
        className="w-10 h-10"
        alt="img"
        src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
      />
      <div className="m-1 p-1 ">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment,idx) => (
    <div key={idx}>
      <Comments comments={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />  
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-1 mx-4">
      <h1 className="font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
