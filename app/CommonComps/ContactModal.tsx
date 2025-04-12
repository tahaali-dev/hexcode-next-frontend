'use client';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { StyledImage } from '../styledComps/containers';
import closeIcon from "../public/Icons/close.svg"
import axios from 'axios';

const Overlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  filter: ${({ show }) => (show ? 'blur(1.5px)' : 'blur(0px)')};
  transition: opacity 0.6s ease, visibility 0.6s ease, filter 0.6s ease;
  filter : blur(1px);
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
    const overlayvid = document.querySelector('.overlay') as HTMLElement | null;

    if (target) {
      if (show) {
        target.style.overflow = 'hidden';
        target.style.maxHeight = '92dvh';
        if (overlayvid) overlayvid.style.display = 'none';
      } else {
        target.style.overflow = '';
        target.style.maxHeight = '';
        if (overlayvid) overlayvid.style.display = '';
      }
    }

    return () => {
      if (target) {
        target.style.overflow = '';
        target.style.maxHeight = '';
      }
      if (overlayvid) {
        overlayvid.style.display = '';
      }
    };
  }, [show]);


  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Category', selectedTag || '');
    formData.append('Email', other);
    formData.append('Message', message);

    try {
      await axios.post(
        'https://script.google.com/macros/s/AKfycbx1hKmgpa-HbyU9HuN-N7JulqsvA9Eb1fnAQuajoU_Sof8MqlwRa4PYOMeuWvSQDyLi/exec',
        formData
      );
      console.log("Form submitted!");
      setIsSubmitted(true);
      setName('');
      setOther('');
      setMessage('');
      setSelectedTag(null);
    } catch (error) {
      console.error("Form submission error:", error);
      // Optional: Add error handling UI
    } finally {
      setIsSubmitting(false);
    }
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

        {isSubmitted ? (
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '400', color: '#181010' }}>Thank you!</h3>
            <p style={{ fontSize: '18px', color: '#352727', marginTop: '8px' }}>
              Your message has been received. We’ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <SectionTitle>What can we do for you?</SectionTitle>
            <Tags>
              {tags.map((tag) => (
                <TagButton
                  key={tag}
                  selected={selectedTag === tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </TagButton>
              ))}
            </Tags>

            <SectionTitle>Your information</SectionTitle>
            <GridForTwo>
              <Input
                name="Name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                name="Email"
                type="email"
                placeholder="Your email"
                value={other}
                onChange={(e) => setOther(e.target.value)}
                required
              />
            </GridForTwo>
            <TextArea
              name="Message"
              placeholder="Sell your dream!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className='d-flex justify-end'>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'SUBMIT'}
              </SubmitButton>
            </div>
          </form>
        )}

      </SlideInContainer>
    </>
  );
}
