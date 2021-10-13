import React from 'react'
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin'

const Createpost = (props) => {
    return (
      <Create title='Create a Post' {...props}>
      <SimpleForm>
      <TextInput source='title'/>
      <DateInput label='Published' source='publishdedat' />

      </SimpleForm>
      </Create>
    )
}

export default Createpost
