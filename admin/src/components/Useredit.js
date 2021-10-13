import React from 'react'
import {Edit, SimpleForm, TextInput} from 'react-admin'

const Edituser = (props) => {
    return (
      <Edit title='Edit  Post' {...props}>
      <SimpleForm>
      <TextInput disabled  source='id'/>

      <TextInput   source='name'/>
      <TextInput label='Published' source='email' />

      </SimpleForm>
      </Edit>
    )
}

export default Edituser
