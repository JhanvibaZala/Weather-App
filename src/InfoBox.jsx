  import Card from "@mui/material/Card";
  import CardContent from "@mui/material/CardContent";
  import CardMedia from "@mui/material/CardMedia";
  import Typography from "@mui/material/Typography";
  import "./InfoBox.css";

  // icons
  import SunnyIcon from '@mui/icons-material/Sunny';
  import AcUnitIcon from '@mui/icons-material/AcUnit';
  import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


  export default function InfoBox({Info}) {
    let HOT_URL = 
      "https://images.unsplash.com/photo-1581224463294-908316338239?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VubnklMjBza3l8ZW58MHx8MHx8fDA%3D";
      let COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
      let RAIN_URL = "https://images.unsplash.com/photo-1721504314427-7151c1b6b371?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnlza3l8ZW58MHx8MHx8fDA%3D";
    return (
      <>
        <div className="InfoBox">
          <div className="cardClass">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={Info.humidity>80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {Info.city} &nbsp;
                  {Info.humidity>80 ? <ThunderstormIcon/> : Info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
                </Typography>

                

                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                  component={"span"}
                >
                  <div>Tempreature = {Info.temp}&deg;C</div>
                  <div>Min Tempreature = {Info.tempMin}&deg;C</div>
                  <div>Max Tempreature = {Info.tempMax}&deg;C</div>
                  <div>Humidity = {Info.humidity}</div>
                  <div>
                    The weather can be described as <i>{Info.weather}</i> and
                    feels like {Info.feelsLike}&deg;C
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    );
  }
