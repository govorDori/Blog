import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';
import { EditorProvider } from 'react-simple-wysiwyg';
import './Story.css'
import { useEffect } from 'react';

export const Story = ({setStory,uploaded,story}) => {
  const [html, setHtml] = useState('');
  
	useEffect(()=>{
		setHtml(story)
	},[story])

  return (
    <EditorProvider> 
		<Editor value={html} onChange={(e)=>setHtml(e.target.value)}
		onBlur={()=>setStory(html)}
		/>
		</EditorProvider>

  );
}