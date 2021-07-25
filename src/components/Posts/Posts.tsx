import React from 'react'
import './styles.css'
import {connect} from 'react-redux';
import {IPostProps}  from './interfaces'
import {IState} from './../../reducer/interfaces';

const Post = ({posts}: IPostProps) => {
  return (<React.Fragment> {posts.map((post, index)=>(
    <ul className="cards" key={index}>
    <li className="cards__item">
      <div className="card">
        <div className="card__image card__image--flowers"></div>
        <div className="card__content">
           <div className="card__title">{post.heading}</div>
          <div className="card__title">{post.subHeading}</div>
          <p className="card__text">{post.summary}</p>
        </div>
      </div>
    </li>
</ul>
  ))} </React.Fragment>);
}

const mapStateToProps = (state:IState ) => {
  return { posts: state.posts}
}
export default connect(mapStateToProps, null)(Post);