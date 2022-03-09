import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FormWrapper, FormItem, RadioGroup, RadioWrapper, BtnSubmit, ErrorText, TextDefault, LinkList } from '../style';


const Invitation = ({ setIsLoading }) => {
  const [success, setSuccess] = React.useState(false);
  const { handleSubmit, formState: { errors }, watch, register } = useForm({
    shouldUnregister: true
  });
  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    Object.keys(data).forEach((n) => {
      formData.append(n, data[n]);
    });
    formData.append('time', `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);
    fetch('https://script.google.com/macros/s/AKfycbzjkvxIG9r6phnVR8dETCIuJDk7HgYOJ9ifbEWdmHDiwnOtRc5toipJEhcSd7bc9g77gA/exec', {
      method: 'POST',
      body: formData,
      mode: 'no-cors'
    })
      .then(response => {
        setIsLoading(false);
        setSuccess(true);
      })
      .catch(error => {
        setIsLoading(false);
        alert('出錯了!請再試一次!或跟怡君聯絡');
      })
  };
  const filledName = watch('name');
  return !success ? (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <TextDefault style={{ marginBottom: 24 }}>Thank you for being here!</TextDefault>
      <FormItem>
        <label>我是...</label>
        <input {...register("name")} type="text" />
      </FormItem>
      <FormItem>
        <label>想對新人說的話</label>
        <textarea rows="5" {...register("message", { required: "請輸入內容" })}></textarea>
        {errors && errors.message && <ErrorText>{errors.message.message}</ErrorText>}
      </FormItem>
      {filledName && (
        <FormItem>
          <label>匿名留言</label>
          <RadioGroup>
            <RadioWrapper>
              <input type="radio" {...register(`anonymous`)} value="Yes" defaultChecked />
              <span>是</span>
            </RadioWrapper>
            <RadioWrapper>
              <input type="radio" {...register(`anonymous`)} value="No" />
              <span>否</span>
            </RadioWrapper>
          </RadioGroup>
        </FormItem>
      )}
      <BtnSubmit type="submit">留 言</BtnSubmit>
    </FormWrapper>
  ) : (
    <TextDefault style={{ marginTop: 30 }}>
      Thanks for your response!
      <LinkList>
        <li><Link to="gallery" title="Gallery | 精選照片">精選照片</Link></li>
        <li><Link to="story" title="Our Story | 我們的故事">我們的故事</Link></li>
        <li><Link to="play" title="Wishes Wall | 賓客祝福">賓客祝福</Link></li>
      </LinkList>
    </TextDefault>
  );
};

export default Invitation;