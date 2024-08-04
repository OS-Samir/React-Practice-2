import React from 'react';
import {Editor} from '@tinymce/tinymce-react';


export const RTE = () => {
  return (
    <Editor
    initialValue='default value'
    init={
        {branding: false,
        height: 500,
        menubar: true,
        plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'

        ],
        }
    } 
    />
  )
}
