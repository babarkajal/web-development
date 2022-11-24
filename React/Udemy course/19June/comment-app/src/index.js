import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetails from './CommentDetails'
import Faker from 'faker'
import ApprovalCard from './ApprovalCard'
// first app to render. In this componenet there are three nexted components with props
const App =()=> {
        return (
                <div className = "ui container comments">
                        <ApprovalCard>
                                <CommentDetails author="Sam" timeAgo = "today at 8:00AM" comment = "Nice post" avtar = {Faker.image.avatar()}/>
                        </ApprovalCard>
                        <ApprovalCard>
                                <CommentDetails author="alex" timeAgo = "yesterday at 5:00PM" comment = "Looking handsome" avtar = {Faker.image.avatar()}/>
                        </ApprovalCard>

                        <ApprovalCard>
                                <CommentDetails author="joey" timeAgo = "yesterday at 9:00AM" comment = "hello, how are you?" avtar = {Faker.image.avatar()}/>
                        </ApprovalCard>
                </div>
         );
}

ReactDOM.render(<App/> , document.getElementById('root'));
