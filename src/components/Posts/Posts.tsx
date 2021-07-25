import React from 'react'
import './styles.css'
import {connect} from 'react-redux';
import {IPostProps}  from './interfaces'
import {IState} from './../../reducer/interfaces';

//review should check, type of parameter, It should not be like 'any'.
const Post = ({posts}: IPostProps) => {
  return (
  <React.Fragment> 
      <ul className="cards" >
        {
          // It will be best that candidate uses the map or foreach function.
          // Those functions provide flexibility over for function and provide good readability.
          posts.map( (post, index)=>(
            <li key={index} className="cardsItem">
              <div className="card">
                <div className="cardContent">
                  <div className="cardTitle">{post.heading}</div>
                  <div className="cardSubTitle">{post.subHeading}</div>
                  <p className="cardText">{post.summary}</p>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
  </React.Fragment>);
}

const mapStateToProps = (state:IState ) => {
  return { posts: state.posts}
}
export default connect(mapStateToProps, null)(Post);