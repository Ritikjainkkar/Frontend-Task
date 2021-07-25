import React, { useState } from 'react'
import { connect } from 'react-redux';
import './styles.css';
import{addPost as addPostAction} from '../../actions/actions';
import {IPosts} from '../Posts/interfaces';
import {IForm} from './interfaces';

//review should check, type of parameter, It should not be like any.
const Form = ({ onSubmitClick }: IForm) => {
  // It is very good coding practise to use const over let or var.
  // check how state is being used
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  const [summary, setSummary] = useState('');

  const onSubmit = () => {
    if( heading !== "" && subHeading !== "" && summary !== "" ) {
      onSubmitClick({heading, subHeading, summary})
      setHeading('');
      setSubHeading('');
      setSummary('');
    }
  }
  return (
    <React.Fragment>
      <form id="msform">
        <fieldset>
          <h2 className="fsTitle">Create Post</h2>
          <h3 className="fsSubtitle">Fill the all mention detail to submit the form</h3>
          <input type="text" name="heading" value={heading} onChange={(e) => setHeading(e.target.value)} placeholder="Heading" />
          <input type="text" name="pass" value={subHeading} onChange={(e) => setSubHeading(e.target.value)} placeholder="Sub-Heading" />
          <textarea name="cpass" value={summary} onChange={(e) => setSummary(e.target.value)} placeholder="Summary" />
          <input type="button" name="Submit" className="previous actionButton" onClick={() => onSubmit()} value="Submit" />
        </fieldset>
      </form>
    </React.Fragment>
  )
}

// This is the correct way to dispatch an action.
const mapDispatchToProps  = (dispatch: any) => ({
    onSubmitClick: (post: IPosts) => dispatch(addPostAction(post))
})

// It is connect react and redux 
export default connect(null, mapDispatchToProps)(Form);