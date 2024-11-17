import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

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

const Comment = ({data}) => {
  const {name , text } = data;
  return <div className='flex bg-gray-300 items-center rounded-lg p-2 my-2 shadow-md'>
    <FaRegUserCircle/>
    <div className='p-3'>
      <p className='text-xl font-bold'>{name}</p>
      <p className='text-lg'>{text}</p>
    </div>
  </div>
}

const CommentList = ({comments}) => {
 return comments.map((comment , index) => (
  <div key={index}>
    <Comment data={comment}/>
    <div className='pl-5 border ml-5 border-l-black'>
      <CommentList comments={comment.replies}/>
    </div>
  </div>
 ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 ml-20 p-2'>
      <h1 className='text-2xl font-bold'>Comments</h1>
      <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;