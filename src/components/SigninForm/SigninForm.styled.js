import styled from 'styled-components';

export const FormField = styled.form`
  // margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-content: center;
  /* align-items: flex-start; */
  /* justify-content: center; */
  /* align-items: center; */
  /* min-width: 300px; */
  /* max-width: 700px; */
  width: 600px;
  margin: 50px auto;
  align-items: flex-start;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  /* justify-content: center;
  align-items: center; */
`;

export const TitleName = styled.label`
  display: flex;
  font-size: 32px;
  color: #fd7272;
  font-weight: 700;
  gap: 10px;
  align-items: center;
`;

export const TitleNumber = styled.label`
  display: block;
  font-size: 32px;
  color: #fd7272;
  font-weight: 700;
`;

export const InputName = styled.input`
  border: 3px solid #2c3a47;
  min-width: 200px;
  min-height: 30px;
  border-radius: 4px;
`;

export const InputNumber = styled.input`
  border: 3px solid #2c3a47;
  min-width: 200px;
  min-height: 30px;
  border-radius: 4px;
`;

export const Btn = styled.button`
  display: block;
  margin-top: 20px;
  padding: 15px 25px;
  font-size: 22px;
  font-weight: 700;
  background-color: #fd7272;
  color: white;
  border-radius: 4px;
  border: none;
  width: 100%;
`;
