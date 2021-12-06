import { useForm, Controller, useFieldArray } from "react-hook-form";
import { FormWrapper, FormItem, RadioGroup, RadioWrapper, BtnSubmit } from '../style';


const Invitation = () => {
  const { handleSubmit, formState: { errors }, control, setValue, watch, getValues, register } = useForm();
  const onSubmit = async data => { console.log(data); };
  const attendance = watch('attendance');
  const attendee = watch('counts');
  console.log('attendee', attendee);
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormItem>
        <label>姓名</label>
        <input {...register("name", { required: "請輸入您的姓名!" })} type="text" />
      </FormItem>
      <FormItem>
        <label>Email</label>
        <input {...register("email", { required: "請輸入您的Email!" })} type="email" />
      </FormItem>
      <FormItem>
        <label>身分</label>
        <RadioGroup>
          <RadioWrapper>
            <input type="radio" {...register("role", { required: "請填寫您的身分!" })} value={'B'} />
            <span>文翔親友</span>
          </RadioWrapper>
          <RadioWrapper>
            <input type="radio" {...register("role", { required: "請填寫您的身分!" })} value={'G'} />
            <span>怡君親友</span>
          </RadioWrapper>
        </RadioGroup>
      </FormItem>
      <FormItem>
        <label>出席狀況</label>
        <RadioGroup>
          <RadioWrapper>
            <input type="radio" {...register("attendance", { required: "請填寫出席狀況!" })} value={'Yes'} />
            <span>我會出席</span>
          </RadioWrapper>
          <RadioWrapper>
            <input type="radio" {...register("attendance", { required: "請填寫出席狀況!" })} value={'No'} />
            <span>隔空祝福</span>
          </RadioWrapper>
        </RadioGroup>
      </FormItem>
      {attendance === 'Yes' && (
        <FormItem>
          <label>出席人數</label>
          <input type="number" min="1" placeholder="記得要算上自己唷!" {...register("counts", { required: "請輸入出席人數!" })} />
        </FormItem>
      )}
      {Array.from({ length: attendee || 0 }, (_, i) => (
        <FormItem key={i}>
          <label>出席者{i + 1}</label>
          <RadioGroup>
            <RadioWrapper>
              <input type="radio" {...register(`food${i + 1}`, { required: "請輸入出席人數!" })} value="notVeg" defaultChecked />
              <span>葷食</span>
            </RadioWrapper>
            <RadioWrapper>
              <input type="radio" {...register(`food${i + 1}`, { required: "請輸入出席人數!" })} value="isVeg" />
              <span>素食</span>
            </RadioWrapper>
          </RadioGroup>
        </FormItem>
      ))}
      <FormItem>
        <label>紙本喜帖</label>
        <RadioGroup>
          <RadioWrapper>
            <input type="radio" name="paper" />
            <span>請寄給我</span>
          </RadioWrapper>
          <RadioWrapper>
            <input type="radio" name="paper" />
            <span>我不需要</span>
          </RadioWrapper>
        </RadioGroup>
      </FormItem>
      <FormItem>
        <label>想說的話</label>
        <textarea rows="5"></textarea>
      </FormItem>
      <small>p.s. 當天女方不設禮金桌，有意送禮的朋友們可在領取喜餅時交予工作人員。</small>
      <BtnSubmit type="submit">送 出</BtnSubmit>
    </FormWrapper>
  );
};

export default Invitation;