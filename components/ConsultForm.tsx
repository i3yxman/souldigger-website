'use client';

import { FormEvent, useState } from 'react';
import styles from './ConsultForm.module.css';
import { site } from '@/data/site';

export function ConsultForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get('name') || '').trim();
    const contact = String(fd.get('contact') || '').trim();
    const company = String(fd.get('company') || '').trim();
    const message = String(fd.get('message') || '').trim();

    const subject = encodeURIComponent(`[咨询] ${company || '未填写公司'} - ${name || '未署名'}`);
    const body = encodeURIComponent(
      `姓名：${name}\n联系方式：${contact}\n公司：${company}\n\n咨询内容：\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.row}>
        <input className={styles.input} name="name" placeholder="联系人姓名" required />
        <input className={styles.input} name="contact" placeholder="手机号/邮箱" required />
      </div>
      <input className={styles.input} name="company" placeholder="公司名称" />
      <textarea className={styles.textarea} name="message" placeholder="请描述你的业务场景与需求" required />
      <button className="btn btn-primary" type="submit">提交咨询</button>
      <p className={styles.tip}>
        {sent ? '信息已提交，请留意邮箱或电话回访。' : '提交咨询即表示你同意我们通过电话或邮件联系你。'}
      </p>
    </form>
  );
}
