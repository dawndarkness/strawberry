import React from "react";

const Tree2 = ({size = 40, color = "#1ca538"}) => {
  return (
    <svg
      height={`${size}px`}
      width={`${size}px`}
      viewBox="0 0 1024 1024"
      className="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M807.057402 313.232628v-2.320241c14.694864-85.075529-26.296073-172.471299-163.190333-151.589124-9.280967 1.546828-14.694864-62.646526-82.755287-76.567976-28.616314-5.413897-85.075529-6.187311-116.012084-0.773414-40.990937 6.960725-78.888218 40.217523-99.770393 89.716012H324.44713c-76.567976-4.640483-123.746224 63.41994-112.145015 134.574018 1.546828 6.960725 0.773414 13.92145 1.546828 20.882176-30.936556 20.882175-59.55287 68.060423-59.55287 114.465256 0 68.060423 53.365559 116.785498 109.824773 116.785499h0.773414c-6.960725 70.380665 56.459215 95.903323 107.504532 95.903323H471.39577c13.92145 0 27.069486-3.093656 39.444109-8.507553 13.92145 6.960725 28.616314 11.601208 44.858006 11.601209h99.770393c51.045317 0 94.356495-41.76435 107.504532-98.996979 0 0 106.731118 60.326284 133.02719-114.465257 12.374622-74.247734-38.670695-122.97281-88.942598-130.706949z"
        fill={color}
      />
      <path
        d="M714.247734 487.250755c-3.867069 50.271903-33.256798 52.592145-45.63142 51.045318 3.867069-5.413897 7.734139-11.601208 10.827795-18.561934 20.882175-40.990937 0-88.169184 6.187311-90.489426 29.389728-14.694864 12.374622-60.326284 12.374622-60.326284l-6.960725 1.546828c9.280967 23.975831 1.546828 40.990937-13.148036 48.725075-37.123867 18.561934-54.138973-20.108761-54.138973-20.108761l-3.093655 8.507553c13.92145 31.70997 53.365559 31.70997 53.365558 31.70997l0.773414 31.709969c-27.8429 37.897281-40.217523 0-40.217522 0l-1.546828 10.054381c23.202417 39.444109 39.444109 4.640483 39.444109 4.640483-1.546828 29.389728-17.78852 47.178248-35.57704 58.006043-34.803625 21.655589-71.154079 16.241692-71.154078 16.241692 19.335347-13.92145 26.296073-29.389728 23.202417-51.045318-3.093656-22.429003-13.148036-20.108761-32.483384-34.030211-12.374622-8.507553-19.335347-20.108761-21.655589-41.764351-3.093656-21.655589 27.8429-37.123867 27.8429-37.123867l-3.867069-6.960725c-55.685801 20.882175-27.069486 74.247734-27.069487 74.247734-19.335347 0.773414-21.655589 0.773414-32.483383-27.069486-10.827795-27.8429-37.123867-10.827795-37.123867-10.827794l1.546827 5.413897c20.108761-13.92145 28.616314 16.241692 28.616315 16.241692 5.413897 35.577039 37.897281 33.256798 37.897281 33.256797 57.232628 12.374622 18.561934 97.450151-28.616315 85.075529-72.700906-19.335347-61.099698-36.350453-61.099697-36.350453 43.311178-23.975831 11.601208-61.873112 11.601208-61.873112l-6.960725 5.413897c23.202417 9.280967 0 55.685801-23.975831 42.537765-26.296073-14.694864-3.867069-41.76435-3.867069-41.764351l-7.734139 1.546828c-23.202417 37.897281 18.561934 54.138973 18.561933 54.138973 1.546828 14.694864 7.734139 24.749245 14.694864 31.70997-37.897281-2.320242-118.332326-17.015106-93.583081-101.317221 0 0 71.154079 4.640483 75.021148-61.099698l-10.054381-3.867069s-5.413897 54.912387-66.513595 51.818731c0 0-46.404834-10.827795-20.108762-62.646526l-8.507552-1.546828s-32.483384 47.178248 16.241691 75.794562c0 0-13.148036 37.123867 1.546828 70.380665-19.335347 9.280967-33.256798-16.241692-33.256797-16.241692l-1.546828 15.468278c17.015106 20.108761 32.483384 14.694864 39.444109 10.827795 15.468278 24.749245 50.271903 45.63142 122.199395 44.084592l-0.773413 398.308157h122.972809l-15.468278-398.308157c37.123867-5.413897 67.287009-7.734139 91.26284-36.350454 55.685801 13.148036 60.326284-58.779456 60.326284-58.779456h-7.734139z"
        fill="#65320b"
      />
    </svg>
  );
};

export default Tree2;
