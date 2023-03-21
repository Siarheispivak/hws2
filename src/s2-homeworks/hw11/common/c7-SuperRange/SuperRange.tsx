import React from 'react'
import {createTheme, Slider, SliderProps} from '@mui/material'
import {palette} from '@mui/system';


const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                color: '#00CC22',
                borderRadius: 10,
                width: 147,


            }}// стили для слайдера // пишет студент

            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)

        />
    )
}

export default SuperRange
