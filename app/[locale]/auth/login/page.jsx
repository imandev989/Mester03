"use client";

import Image from "next/image";
import { useState, useRef } from "react";

const CheckLogin = () => {
  const [login, setLogin] = useState(true);

  const [isDisabled, setIsDisabled] = useState(false);

  const [forgot, setForgot] = useState(false);
  const mobileRef = useRef("");

  function checkMobile() {
    // setCheckLogin(false);
    // setLogin(true);
    setIsDisabled(true);
  }

  function forgotPassword() {
    setIsDisabled(false);
    mobileRef.current.value = "";
    setForgot(true);
  }

  function changeMobile() {
    setIsDisabled(false);
    mobileRef.current.value = "";
    // mobileRef.current.placeholder = "شماره";
  }

  function changePassword() {
    setForgot(false);
    setIsDisabled(true);
  }

  return (
    <div className="flex flex-col sm:w-[50%] md:w-[30%] py-10 px-2 mx-auto mt-10  sm:items-center border-2 border-gray-100  gap-4 rounded-lg">
      <div>
        <Image
          src="/images/configsImages/MrTabligh.jpg"
          priority={true}
          width={70}
          height={70}
          alt="لوگوی مستر تبلیغ"
          style={{ borderRadius: "50px", margin: "0px auto 0px auto" }}
        />
      </div>

      {login ? (
        <>
          <div className="flex flex-col w-full gap-2 text-center items-center ">
            <div>
              <span className="text-xl font-bold">ورود | ثبت نام</span>
            </div>
            <div>
              <div>
                <span>لطفا شماره موبایلت رو وارد کن</span>
              </div>
            </div>

            <input
              type="text"
              // id="outlined-password-input"
              placeholder="شماره تلفن همراه"
              label="شماره تلفن همراه"
              required
              disabled={isDisabled}
              ref={mobileRef}
              className="w-full sm:w-2/4 bg-gray-200 py-2 px-2 rounded-md"
            />

            {forgot && (
              <>
                <input
                  type="text"
                  // id="outlined-password-input"
                  label="پیامک ارسالی"
                  placeholder="پیامک ارسال شده"
                  required
                  className="w-full sm:w-2/4 bg-gray-200 p-2 rounded-md"
                />
                <input
                  // id="outlined-password-input"
                  label="رمز عبور جدید"
                  placeholder="رمز عبور"
                  required
                  className="w-full sm:w-2/4 bg-gray-200 p-2 rounded-md"
                  type="password"
                  autoComplete="current-password"
                />

                <input
                  // id="outlined-password-input"
                  label="تکرار رمز عبور جدید"
                  placeholder="تکرار رمز عبور"
                  required
                  className="w-full sm:w-2/4 bg-gray-200 p-2 rounded-md"
                  type="password"
                  autoComplete="current-password"
                />
                <button
                  variant="contained"
                  className="w-full sm:w-[20%] bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 my-2"
                  onClick={changePassword}
                >
                  تغییر رمز عبور
                </button>
              </>
            )}

            {isDisabled && (
              <>
                <div className="flex justify-end w-full sm:w-2/4">
                  <span
                    className="text-blue-500 text-xs  cursor-pointer my-2 "
                    onClick={changeMobile}
                  >
                    تغییر شماره موبایل
                  </span>
                </div>

                <input
                  // id="outlined-password-input"
                  label="تکرار رمز عبور جدید"
                  required
                  className="w-full sm:w-2/4 bg-gray-200 p-2 rounded-md"
                  type="password"
                  autoComplete="current-password"
                />

                <div className="flex justify-start w-full sm:w-3/4">
                  <span
                    className="text-gray-500 text-sm  cursor-pointer my-2 "
                    onClick={forgotPassword}
                  >
                    رمز را فراموش کردی؟
                  </span>
                </div>
              </>
            )}

            {!forgot && (
              <button
                variant="contained"
                className="w-full sm:w-[20%] bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800"
                onClick={checkMobile}
              >
                ورود
              </button>
            )}

            <div>
              <p className="text-xs">
                ورود شما به معنای پذیرش{" "}
                <span className="text-blue-500">شرایط مستر</span> و{" "}
                <span className="text-blue-500">قوانین حریم شخصی</span> است.
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col w-full gap-4 text-center items-center ">
            <div>
              <span className="text-xl font-bold">ورود | ثبت نام</span>
            </div>
            <div>
              <div>
                <span>لطفا شماره موبایل و رمز عبور خودت رو وارد کن</span>
              </div>
            </div>

            <input
              type="number"
              label="شماره تلفن همراه"
              required
              className="w-full sm:w-3/4"
            />

            <input
              type="text"
              // id="outlined-password-input"
              label="پیامک ارسالی"
              required
              className="w-full sm:w-3/4 "
            />

            <input
              type="text"
              label="نام"
              required
              className="w-full sm:w-3/4"
            />

            <input
              type="text"
              label="نام خانوادگی"
              required
              className="w-full sm:w-3/4"
            />

            <input
              // id="outlined-password-input"
              label="رمز عبور جدید"
              required
              className="w-full sm:w-3/4"
              type="password"
              autoComplete="current-password"
            />
            <button variant="contained" className="w-full sm:w-3/4">
              ورود
            </button>
            <div>
              <p className="text-xs">
                ورود شما به معنای پذیرش{" "}
                <span className="text-blue-500">شرایط مستر</span> و{" "}
                <span className="text-blue-500">قوانین حریم شخصی</span> است.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckLogin;
