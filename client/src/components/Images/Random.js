import React from 'react';
import Cat from "./AnImg/Cat.jpg";
import Dog1 from "./AnImg/Dog1.jpg";
// import Dog2 from "./AnImg/Dog2.jpg";
// import Fish1 from "./AnImg/Fish1.jpg";
// import Fish2 from "./AnImg/Fish2.jpg";
// import Horse1 from "./AnImg/Horse1.jpg";
// import Horse2 from "./AnImg/Horse2.jpg";


// const useRandomImage = () => {
//   const [ Image,setColor] = useState("")
//   const generateColor = () =>{
//       setColor(Math.random().toString(16).substr(-6));
//   };
//   return {color,generateColor};
    
// };
// export default useGenerateRandomColor;

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bgStyle : {
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    }
  }

  componentWillMount() {

    const pictureArray = [ Cat, Dog1 ];
    const randomIndex = Math.floor(Math.random() * pictureArray.length);
    const selectedPicture = pictureArray[randomIndex];

    this.setState({
      bgStyle : {
        backgroundImage : `url(${selectedPicture})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }
    })
  }

  render() {
    return (
      <div> 
        <a style={this.state.bgStyle} className="hero" ></a>
      </div>
    );
  }
};

