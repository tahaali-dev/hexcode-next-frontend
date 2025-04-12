'use client';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { StyledImage } from '../styledComps/containers';
import closeIcon from "../public/Icons/close.svg"

const Overlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  transition: opacity 0.6s ease, visibility 0.6s ease;
`;


const SlideInContainer = styled.div<{ show: boolean }>`
  position: fixed;
  top: 200%;
  // transform: translateY(-50%);
  left: ${({ show }) => (show ? '38px' : '-800px')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  width: 763px;
  background: #ffffff;
  padding: 2rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition: left 0.5s ease, opacity 0.5s ease;
  z-index: 1001;
  border-radius: 32px;

  @media (max-width: 768px) {
    left: ${({ show }) => (show ? '0' : '-100%')};
    width: 100%;
    height: 100dvh;
    top: 0;
    transform: none;
    border-radius: 0;
    padding: 1.5rem 1rem;
  }
`;


const Title = styled.h2`
color:  #181010;
font-size: 54px;
font-weight: 400;
line-height: 64px;
text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const SectionTitle = styled.h4`
color:  #352727;
font-size: 24px;
font-weight: 300;
line-height: 30px;
margin-top:32px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 16px;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const TagButton = styled.button<{ selected?: boolean }>`
  border-radius: 50px;
  border: 1px solid #D3C5C5;
  background: ${({ selected }) => (selected ? '#EE232A' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#181010')};
  padding: 12px 16px;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ selected }) => (selected ? '#d11e25' : '#F5EAEA')};
    transform: scale(0.98);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px 14px;
  }
`;



const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 1rem;
  border-radius: 50px;
  border: 1px solid #D3C5C5;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;

  &::placeholder {
    color: #C2B3B3;
    font-weight: 300;
    opacity: 1; /* ensures color isn't faded */
  }

  &:focus {
    outline: none;
    border-color: #EE232A; /* optional: add a subtle brand border on focus */
  }
`;


const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
border-radius: 24px;
border: 1px solid  #D3C5C5;
font-size: 18px;
font-weight: 300;
line-height: 24px; 
  height: 180px;
  resize: none;

    &::placeholder {
    color: #C2B3B3;
    font-weight: 300;
    opacity: 1; /* ensures color isn't faded */
  }

  &:focus {
    outline: none;
    border-color: #EE232A; /* optional: add a subtle brand border on focus */
  }
`;

const SubmitButton = styled.button`
border-radius: 8px;
background: var(--Brand-red-red-500, #EE232A);
 padding: 18px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 157px;
  color:  #FFF;
font-size: 18px;
font-weight: 600;
letter-spacing: 0.72px;
text-transform: uppercase;
margin-top: 28px;

  @media (max-width: 480px) {
width: 100%;
  }
`;


const GridForTwo = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1rem;
margin-top: 16px;

  @media (max-width: 480px) {
  grid-template-columns: 1fr;
  gap: 0px;

  }
`

const tags = ['Brand Strategy', 'Identity', 'Website', 'Product design', 'Other'];

export default function ContactForm({ show, onClose }: { show: boolean; onClose: () => void }) {
 const [selectedTag, setSelectedTag] = useState<string | null>(null);
 const [name, setName] = useState('');
 const [other, setOther] = useState('');
 const [message, setMessage] = useState('');

 useEffect(() => {
  const target = document.getElementById('body-scroll');

  if (target) {
   if (show) {
    target.style.overflow = 'hidden';
    target.style.maxHeight = '92dvh';
   } else {
    target.style.overflow = '';
    target.style.maxHeight = '';
   }
  }

  // Cleanup when unmounting or when show becomes false
  return () => {
   if (target) {
    target.style.overflow = '';
    target.style.maxHeight = '';
   }
  };
 }, [show]);

 const handleSubmit = () => {
  console.log({ selectedTag, name, other, message });
  // Add form submission logic here
  onClose();
 };

 return (
  <>
   {show && <Overlay show={show} onClick={onClose} />}
   <SlideInContainer show={show}>

    <div className='d-flex justify-between align-center'>
     <Title>LET’S TALK</Title>

     <div onClick={onClose} className='pointer'>
      <StyledImage
       src={closeIcon}
       alt="figma-icon"
       width="20"
       height="20"
      />
     </div>

    </div>




    <SectionTitle>What can we do for you?</SectionTitle>
    <Tags>
     {tags.map((tag) => (
      <TagButton
       key={tag}
       selected={selectedTag === tag}
       onClick={() => setSelectedTag(tag)}
      >
       {tag}
      </TagButton>
     ))}
    </Tags>

    <SectionTitle>Your information</SectionTitle>
    <GridForTwo>
     <Input
      placeholder="Your name"
      value={name}
      onChange={(e) => setName(e.target.value)}
     />
     <Input
      placeholder="Other"
      value={other}
      onChange={(e) => setOther(e.target.value)}
     />
    </GridForTwo>
    <TextArea
     placeholder="Sell your dream!"
     value={message}
     onChange={(e) => setMessage(e.target.value)}
    />

    <div className='d-flex justify-end'>
     <SubmitButton onClick={handleSubmit}>SUBMIT</SubmitButton>
    </div>
   </SlideInContainer>
  </>
 );
}
