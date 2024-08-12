import React from "react";

//optional chaining: toán tử ? dành cho object (kiểm tra nếu object có tồn tại thì mới truy xuất thuộc tính không thì sẽ bỏ qua)

const ArticleItem = (props) => {  //props = {contentArticle: {...}}
    const {contentArticle} = props;
    const {title,content,view,like,dislike} = props.contentArticle;

  return (
    <div className="bg-dark text-white p-3 my-2">
        {/* <h1>{props.contentArticle?.title}</h1> */}
        <h1>{title}</h1>
        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quae!</p> */}
        <p>{content}</p>
        <div className='text-end '>
                <button className='btn btn-secondary'>{view} View</button>
                <button className='btn btn-danger'>{like}Like</button>
                <button className='btn btn-primary'>{dislike}Dislike</button>
            </div>
    </div>
  )

};

export default ArticleItem;
