import React from 'react'
import {Edit, SimpleForm, TextInput, DateInput} from 'react-admin'

const Editpost = (props) => {
    return (
      <Edit title='Edit  Post' {...props}>
      <SimpleForm>
      <TextInput disabled  source='id'/>

      <TextInput   source='title'/>
      <DateInput label='Published' source='publishdedat' />

      </SimpleForm>
      </Edit>
    )
}

export default Editpost
