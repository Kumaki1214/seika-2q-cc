import 'swiper/css/bundle';
import Swiper from 'swiper/bundle';



const swiper = new Swiper('.swiper1', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
    
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
    
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
    
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
    });

    swiper.on('slideChange', function () {
	console.log('slide changed');
	console.log(swiper.realIndex);
	let c = swiper.realIndex + 1;
	document.getElementById("swilesult").innerHTML = 'スライド' + c + 'を表示しています。'
    });

    const swiper2 = new Swiper('.swiper2', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
    
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
    
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
    
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
    });

    swiper2.on('slideChange', function () {
	console.log('slide changed');
	console.log(swiper2.realIndex);
	let b = swiper2.realIndex + 1;
	document.getElementById("swilesult2").innerHTML = 'スライド' + b + 'を表示しています。'
    });

import JustValidate from 'just-validate';
const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
	errorMessage: '必須項目です',
    },
    {
      rule: 'minLength',
      value: 3,
	errorMessage: '最低入力文字数は３文字です',
    },
    {
      rule: 'maxLength',
      value: 15,
	errorMessage: '最大入力文字数は１５文字です',
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
	errorMessage: '必須項目です',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
	errorMessage: 'メールアドレスを記入してください。',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
	errorMessage: '必須項目です',
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
	errorMessage: '必須項目です',
    },
    {
      rule: 'number',
	errorMessage: '数字のみです',
    },
    {
      rule: 'minNumber',
      value: 18,
	errorMessage: '18歳以上のみです',
    },
    {
      rule: 'maxNumber',
      value: 150,
	errorMessage: 'あなたは人間ではありません',
    },
  ])
  .addField('#basic_zyusyo', [
	{
	  rule: 'required',
	  errorMessage: '必須項目です',
	},
	{
	  rule: 'required',
	  errorMessage: '必須項目です',
	},
	{
	  rule: 'required',
	  errorMessage: '必須項目です',
	},
    ])

    .onSuccess(onSuccess);

    function onSuccess(event){
	let formDate = new FormData(event.target);
	console.log(formDate.get("name"));
	console.log(formDate.get("email"));
	console.log(formDate.get("pas"));
	console.log(formDate.get("age"));
	console.log(formDate.get("zyusyo"));
	}