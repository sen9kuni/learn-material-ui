import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

export default function Signature() {
  const [imgSave, setImgSave] = useState(null);
  const tempCanvas = useRef();
  const clear = () => {
    tempCanvas.current.clear();
    setImgSave(null);
  };
  const save = () => {
    const URL = white2transparent(tempCanvas.current.getTrimmedCanvas());
    setImgSave(URL);

    function white2transparent(img) {
      var c = document.createElement("canvas");

      var w = img.width,
        h = img.height;

      c.width = w;
      c.height = h;

      var ctx = c.getContext("2d");

      ctx.width = w;
      ctx.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      var imageData = ctx.getImageData(0, 0, w, h);
      var pixel = imageData.data;

      var r = 0,
        g = 1,
        b = 2,
        a = 3;
      for (var p = 0; p < pixel.length; p += 4) {
        if (
          pixel[p + r] === 255 &&
          pixel[p + g] === 255 &&
          pixel[p + b] === 255
        ) {
          // if white then change alpha to 0
          pixel[p + a] = 0;
        }
      }

      ctx.putImageData(imageData, 0, 0);

      return c.toDataURL("image/png");
    }
  };
  const downld = () => {
    const dlink = document.createElement("a");
    dlink.setAttribute("href", imgSave);
    dlink.setAttribute("download", "signature.png");
    dlink.click();
  };

  return (
    <>
      <div>
        <SignatureCanvas
          backgroundColor="white"
          penColor="black"
          canvasProps={{ width: 300, height: 200, opacity: 0 }}
          ref={tempCanvas}
          minWidth={2}
        />
      </div>
      <div>
        <button onClick={() => save()}>save</button>
        <button onClick={() => clear()}>clear</button>
        <button onClick={() => downld()}>download</button>
      </div>
      <div>
        {imgSave ? <img id="tempimage" src={imgSave} alt="signature" /> : null}
      </div>
      {/* <div>
        <canvas id="canvas"></canvas>
      </div> */}
    </>
  );
}
