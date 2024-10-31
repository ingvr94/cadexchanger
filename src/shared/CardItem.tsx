import { Card, CardContent } from "@mui/material"
import Typography from '@mui/material/Typography';

type CardProps = {
    key:number
    title:string
    body:string
}

const CardItem = ({title,body}: CardProps) => {
  return (
    <Card sx={{ maxWidth: 300, boxShadow:'none' }}>
        <CardContent>
            <Typography variant="h5" sx={{fontWeight:600}} component='div'>
                {title}
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: 14 }} variant="body2">
                {body}
            </Typography>
        </CardContent>
    </Card>
  )
}

export default CardItem