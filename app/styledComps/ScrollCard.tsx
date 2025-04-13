import styled from "@emotion/styled"
import { StyledImage } from "./containers";
import { PrimaryBtn } from "./buttons";


const ScrollCard = ({
 title,
 bgcolor,
 para1,
 para2,
 image,
 mobileImage,
 icon,
 type
}: {
 title: string;
 bgcolor: string;
 para1: string;
 para2: string;
 image: string;
 mobileImage: any;
 icon: string;
 type: string;
}) => {
 return (
  <ScrollCardWrapper className="scroll-card">
   <LeftBox bgcolor={bgcolor} type={type}>
    <div className="d-flex g-md ">
     <StyledImage
      src={icon}
      width={64}
      height={64}
      alt={`image`}
      className="m-none"
     />
     <h4 className="card-heading">{title}</h4>
    </div>

    {/* content box */}
    <div className="content-box">
     {/* text left */}


     <div>
      <p className="text-left">
       {para1.split("\n").map((line, index) => (
        <span key={index}>
         {line}
         <br />
        </span>
       ))}
      </p>

      {/* Mobile image */}
      {
       type == "consulting" && <StyledImage
        src={mobileImage}
        alt={`image`}
        className="mobile-illustration d-none"
       />
      }

      {

       type == "consulting" &&
       <div className="mt-lg w-full">
        <PrimaryBtn
         padding="16px"
         fontSize="18px"
         margin="0"
         borderRadius="8px"
         btnContent="Book a call"
         onClick={() => window.open("https://calendly.com/shabbir-hexcode/30min", "_blank")}
        />
       </div>
      }
     </div>



     {/* text right */}
     {
      type == "default" && <p className="text-right">
       {para2.split("\n").map((line, index) => (
        <span key={index}>
         {line}
         <br />
        </span>
       ))}
      </p>
     }

     {/* Mobile image */}
     {
      type == "default" && <StyledImage
       src={mobileImage}
       alt={`image`}
       className="mobile-illustration d-none"
      />
     }

    </div>
   </LeftBox>


   <RightBox bgcolor={bgcolor} className="m-none">
    <div className="half-color"></div>
    <StyledImage src={image} alt={`image`} className="illustration" />
   </RightBox>


  </ScrollCardWrapper>
 )
}

export default ScrollCard



// styles
const ScrollCardWrapper = styled.div`
// border: 1px solid #000;
display: flex;


  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const LeftBox = styled.div<{
 bgcolor: string,
 type: string,
}>`
width: 65%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 32px 24px;
background-color: ${({ bgcolor }) => bgcolor || "#fff"};
border-radius: 16px 0 0 16px;

.card-heading {
  color: ${({ type }) => type == "consulting" ? "#fff" : "var(--clr-dark)"};
  font-size: 54px;
  font-weight: 500;
  line-height: 64px;
  text-transform: uppercase;
}


 .content-box {
  display: flex;
  justify-content: space-between;

    .text-left {
        // color: var(--clr-dark2);
        font-size: 18px;
        font-weight: 300;
        line-height: 24px;
        color: ${({ type }) => type == "consulting" ? "#fff" : "var(--clr-dark)"};
      }

        .text-right {
        color: var(--clr-dark);
        font-size: 18px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
      }
 }


   @media (max-width: 768px) {
     width: 100%;
      padding: 16px;
      gap: 16px;
      border-radius: 16px;

        .card-heading {
        font-size: 32px;
        line-height: 42px;
      }

      .content-box {
        flex-direction: column;
        gap: 24px;

        .text-left,
        .text-right {
          font-size: 16px;
          line-height: 24px;
        }
      }


        .w-full {
      width: 100%;
    }
   
   }

`
const RightBox = styled.div<{ bgcolor: string }>`
width: 35%;
position: relative;

  .half-color {
  position: absolute;
      background-color: ${({ bgcolor }) => bgcolor || "#fff"};
      // background-color: red;
      width: 50%;
      height: 100%;
      left: 0px;
      top: 0px;
z-index: 0;
    }


  .illustration {
      object-fit: contain;
      position :relative;
      z-index: 1;
    }

`