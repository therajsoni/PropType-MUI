import React from 'react'
import Button from './Button'

const display = () => {
  return (
    <div>
        <Button size='small'>
            <span>Hello bro small</span>
        </Button>
        <Button size='medium'>
            <span>Hello bro medium</span>
        </Button>
        <Button size='large'>
            <span>Hello bro large</span>
        </Button>
        
    </div>
  )
}

export default display
