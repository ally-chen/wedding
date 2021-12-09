import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FormWrapper, FormItem, RadioGroup, RadioWrapper, BtnSubmit, ErrorText, TextDefault, LinkList } from '../style';


const Invitation = ({setIsLoading}) => {
  const [success, setSuccess] = React.useState(false);
  const { handleSubmit, formState: { errors }, watch, register } = useForm({
    shouldUnregister: true
  });
  const onSubmit = async (data) => {
    setIsLoading(true);
    const formData = new FormData();
    Object.keys(data).forEach((n) => {
      if (!n.includes('vegan')) {
        formData.append(n, data[n]);
      }
    });
    const veganCounts = Object.keys(data).filter((n) => n.includes('vegan') && data[n] === 'Yes').length;
    formData.append('vegan', veganCounts);
    formData.append('time', `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`);
    fetch('https://script.google.com/macros/s/AKfycbwlbgo7bO7lkcgeeyi4St--fzsRaCAD54CYZ8gAxlsB7lA90dk_xbNR868MathrB6miDg/exec', {
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
  const attendance = watch('attendance');
  const attendee = watch('counts');
  const paperAccept = watch('paper');
  const role = watch('role');
  const takeout = watch('takeout');
  return !success ? (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <label>姓名</label>
        <input {...register("name", { required: "請輸入您的姓名!" })} type="text" />
        {errors && errors.name && <ErrorText>{errors.name.message}</ErrorText>}
      </FormItem>
      <FormItem>
        <label>Email</label>
        <input {...register("email", { required: "請輸入您的Email!" })} type="email" />
        {errors && errors.email && <ErrorText>{errors.email.message}</ErrorText>}
      </FormItem>
      <FormItem>
        <label>身分</label>
        <RadioGroup>
          <RadioWrapper>
            <input type="radio" {...register("role", { required: "請選擇您的身分!" })} value="文翔朋友" />
            <span>文翔朋友</span>
          </RadioWrapper>
          <RadioWrapper>
            <input type="radio" {...register("role", { required: "請選擇您的身分!" })} value="怡君朋友" />
            <span>怡君朋友</span>
          </RadioWrapper>
        </RadioGroup>
        {errors && errors.role && <ErrorText>{errors.role.message}</ErrorText>}
      </FormItem>
      <FormItem>
        <label>出席狀況</label>
        <RadioGroup>
          <RadioWrapper>
            <input type="radio" {...register("attendance", { required: "請選擇出席狀況!" })} value="Yes" />
            <span>我會出席</span>
          </RadioWrapper>
          <RadioWrapper>
            <input type="radio" {...register("attendance", { required: "請選擇出席狀況!" })} value="No" />
            <span>隔空祝福</span>
          </RadioWrapper>
        </RadioGroup>
        {errors && errors.attendance && <ErrorText>{errors.attendance.message}</ErrorText>}
      </FormItem>
      {attendance === "Yes" && (
        <FormItem>
          <label>出席人數</label>
          <input type="number" min="1" placeholder="記得要算上自己唷!" {...register("counts", { required: "請輸入出席人數!" })} />
          {errors && errors.counts && <ErrorText>{errors.counts.message}</ErrorText>}
        </FormItem>
      )}
      {attendance === "No" && role === "怡君朋友" && (
        <FormItem>
          <label>領取喜餅</label>
          <RadioGroup>
            <RadioWrapper>
              <input type="radio" {...register(`takeout`, { required: "請選擇是否要收到喜餅!" })} value="Yes" />
              <span>94要吃餅</span>
            </RadioWrapper>
            <RadioWrapper>
              <input type="radio" {...register(`takeout`, { required: "請選擇是否要收到喜餅!" })} value="No" />
              <span>不用囉</span>
            </RadioWrapper>
          </RadioGroup>
          {errors && errors.takeout && <ErrorText>{errors.takeout.message}</ErrorText>}
        </FormItem>
      )}
      {Array.from({ length: attendance === "Yes" ? attendee : 0 }, (_, i) => (
        <FormItem key={i}>
          <label>出席者{i + 1}</label>
          <RadioGroup>
            <RadioWrapper>
              <input type="radio" {...register(`vegan${i + 1}`)} value="No" defaultChecked />
              <span>葷食</span>
            </RadioWrapper>
            <RadioWrapper>
              <input type="radio" {...register(`vegan${i + 1}`)} value="Yes" />
              <span>素食</span>
            </RadioWrapper>
          </RadioGroup>
        </FormItem>
      ))}
      <FormItem>
        <label>紙本喜帖</label>
        <RadioGroup>
          <RadioWrapper>
            <input type="radio" name="paper" {...register("paper", { required: "請選擇是否要收到紙本喜帖!" })} value="Yes" />
            <span>請寄給我</span>
          </RadioWrapper>
          <RadioWrapper>
            <input type="radio" name="paper" {...register("paper", { required: "請選擇是否要收到紙本喜帖!" })} value="No" />
            <span>我不需要</span>
          </RadioWrapper>
        </RadioGroup>
        {errors && errors.paper && <ErrorText>{errors.paper.message}</ErrorText>}
      </FormItem>
      {paperAccept === "Yes" && (
        <FormItem>
          <label>地址</label>
          <input {...register("address", { required: "請輸入喜帖要寄送的地址!" })} type="text" />
          {errors && errors.address && <ErrorText>{errors.address.message}</ErrorText>}
        </FormItem>
      )}
      {(paperAccept === "Yes" || takeout === "Yes") && (
        <FormItem>
          <label>聯絡電話</label>
          <input {...register("phone", { required: "請輸入可聯絡到您的電話!" })} type="tel" />
          {errors && errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
        </FormItem>
      )}
      <FormItem>
        <label>想說的話</label>
        <textarea rows="5" {...register("message")}></textarea>
      </FormItem>
      {role === "怡君朋友" && <small>p.s. 當天女方不設禮金桌，有意送禮的朋友們可在領取喜餅時交予工作人員。</small>}
      <BtnSubmit type="submit">送 出</BtnSubmit>
    </FormWrapper>
  ) : (
    <TextDefault>
      Thanks for your response!<br /><br />感謝您的回覆！您可以了解更多：
      <LinkList>
        <li><Link to="information" title="Information | 婚宴資訊">婚宴資訊</Link></li>
        <li><Link to="gallery" title="Gallery | 精選照片">精選照片</Link></li>
        <li><Link to="story" title="Our Story | 我們的故事">我們的故事</Link></li>
      </LinkList>
    </TextDefault>
  );
};

export default Invitation;