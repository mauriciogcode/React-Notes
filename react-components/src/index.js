import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45pm"
          comment="Yes, of course"
          avatarimg="https://source.unsplash.com/random/?people"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jess"
          timeAgo="Yesterday at 9:45pm"
          comment="Great!"
          avatarimg="https://source.unsplash.com/random"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Chris"
          timeAgo="Yesterday at 6:45pm"
          comment="Awesome"
          avatarimg="https://source.unsplash.com/300x300/?fruit"
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
