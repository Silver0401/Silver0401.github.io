import anime from "animejs";
import React, { useContext, useEffect, useRef } from "react";
// import Anime from "react-animejs-wrapper";
import { ChosenDataContext } from "../ChosenData";

interface props {
  sectionRef: any;
}

const InitSection: React.FC<props> = ({ sectionRef }) => {
  const [transversalData, setTransversalData] = useContext(ChosenDataContext);
  const rotatingAnimRef = useRef<any>();

  useEffect(() => {
    rotatingAnimRef.current = anime({
      targets: ".CirclesBox",
      duration: 10000,
      rotateZ: "360deg",
      loop: true,
      easing: "linear",
    });
  }, []);

  const CreateCircle = (className: string, CElement: string) => {
    let SelectedSvgPath;

    switch (CElement) {
      case "Med":
        SelectedSvgPath = (
          <path d="M2.212 8.288c-1.17-.832-1.997-1.955-2.212-3.347.493-.03 1.047-.033 1.52-.172 1.755-.518 2.963-2.798 5.173-2.769 2.076.067 2.742 1.894 3.948 2.353.092.036.215.065.358.089v-.71c-.598-.346-1-.992-1-1.732 0-1.104.896-2 2-2s2 .896 2 2c0 .74-.402 1.386-1 1.732v.71c.144-.023.268-.053.36-.089 1.206-.459 1.872-2.286 3.948-2.353 2.21-.029 3.418 2.251 5.173 2.769.473.139 1.027.142 1.52.172-.215 1.392-1.041 2.514-2.21 3.346-1.148-.504-2.126-1.223-2.964-2.086.234 1.056.767 2.073 1.481 2.913-.697.303-1.454.53-2.237.68-1.015-.791-1.806-1.723-2.51-2.943-.004 1.12.242 2.137.681 3.15-1.107.041-2.217-.068-3.242-.335v6.923c.843.262 1.911.611 2.542 1.201 2.008 1.877.83 4.698-1.539 4.787v-1c1.266-.627 1.504-1.961-1.003-2.878v4.301c0 .553-.448 1-1 1s-1-.447-1-1v-4.896c-1.955-.51-5.364-1.17-5.339-4.003.018-1.696 1.55-3.101 3.331-3.101h.01c.553 0 1 .448 1 1 0 .549-.442.994-.989 1-.836.009-1.392.651-1.349 1.192.098 1.124 2.22 1.556 3.336 1.844v-6.369c-1.023.266-2.13.375-3.234.334.439-1.013.685-2.03.68-3.15-.704 1.22-1.495 2.153-2.511 2.944-.783-.15-1.54-.377-2.237-.679.714-.841 1.248-1.859 1.482-2.915-.838.864-1.818 1.584-2.967 2.087zm5.748 10.077c.863.25 1.655.463 2.35.624-1.691.869-1.495 2.002-.311 2.588v1c-2.138-.08-3.305-2.384-2.039-4.212zm6.073-2.606c.889-.257 2.232-.644 2.305-1.567.043-.543-.516-1.183-1.35-1.192-.547-.006-.989-.451-.989-1 0-.552.448-1 1-1h.011c1.772 0 3.313 1.399 3.33 3.101.017 1.273-.851 2.367-1.986 2.934-.6-.505-1.397-.909-2.321-1.276z" />
        );
        break;
      case "Modeling":
        SelectedSvgPath = (
          <path d="M11.995 2.281l9.005 4.966v9.685l-9 4.802-9-4.802v-9.744l8.995-4.907zm.005-2.281l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm.01 10.871l5.787-2.976-5.797-3.098-5.705 3.018 5.715 3.056zm-1.01 1.728l-6-3.208v6.185l6 3.077v-6.054zm2 .011v6.043l6-3.077v-6.051l-6 3.085z" />
        );
        break;
      case "Xp":
        SelectedSvgPath = (
          <path d="M22 0h-20v24h14l6-6v-18zm-7 23h-12v-22h18v16h-6v6zm1-5h4.586l-4.586 4.586v-4.586zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm0-4h-4v1h4v-1zm-6.006 1h-7.991l-.003-.789c-.003-.72-.006-1.615 1.314-1.92 1.483-.341 1.236-.418 1.158-.563-1.078-1.988-.71-3.173-.395-3.703.388-.651 1.089-1.025 1.923-1.025.827 0 1.523.368 1.91 1.011.545.904.409 2.222-.379 3.713-.105.196-.195.255 1.119.559 1.355.312 1.352 1.212 1.35 1.936l-.006.781zm-6.994-1h6c-.007-.547-.07-.626-.54-.734-.855-.198-1.629-.376-1.901-.972-.142-.311-.113-.66.087-1.039.61-1.151.758-2.146.407-2.729-.276-.458-.778-.526-1.053-.526-.48 0-.857.19-1.063.537-.352.59-.201 1.58.414 2.714.204.377.236.727.095 1.039-.269.598-1.036.774-1.847.962-.525.121-.593.202-.599.748zm13-2v-1h-4v1h4zm0-4h-4v1h4v-1z" />
        );
        break;
      case "Lang":
        SelectedSvgPath = (
          <path d="M18.604 16.111c.018.276.048.531.092.758-.583.106-.606-.469-.092-.758zm-4.354.16h.996l-.498-1.43-.498 1.43zm2.75-6.105c3.697 0 7 2.465 7 5.837 0 1.196-.432 2.37-1.193 3.281-.033 1.068.596 2.6 1.162 3.715-1.518-.274-3.676-.88-4.654-1.48-5.387 1.313-9.315-1.984-9.315-5.516 0-3.39 3.326-5.837 7-5.837zm-.437 7.584l-1.44-3.792h-.76l-1.447 3.792h.812l.312-.875h1.422l.313.875h.788zm3.988-2.296l.079-.353-.642-.125-.064.292c-.215-.032-.445-.036-.679-.012l.028-.458h.717v-.608h-.631l.084-.335-.627-.188c-.046.154-.084.304-.123.523h-.715v.608h.638c-.018.196-.026.399-.03.605-.704.259-1.002.751-1.002 1.198 0 .528.416.992 1.074.932.817-.074 1.362-.691 1.682-1.45.332.19.471.511.346.807-.115.275-.455.536-1.104.523v.654c.721.011 1.429-.262 1.707-.923.27-.647-.041-1.352-.738-1.69zm-1.25 1.073c.17-.177.305-.401.407-.626-.147-.013-.306-.009-.462.012.011.22.028.425.055.614zm-10.492 2.703c-1.887-.271-3.571-1.165-4.827-2.478-.182-.189-.315-.636-.019-.819l.302-.078c.235-.199-.221-1.009-.04-1.14.561-.401.295-.893-.051-1.299-.146-.172-.948-1-1.038-.853.067-.226-.146-.772-.274-.987-.217-.362-.502-.585-.617-.982-.046-.158-.046-.64-.139-.751-.038-.045-.327-.167-.317-.233.278-1.655 1.044-3.143 2.149-4.318l.746-.301c.468-.703.495-.158.916-.341.141 0 .301-.578.452-.667.261-.169.062-.169.013-.245-.104-.168 2.191-1.003 2.229-.853.032.127-1.135.734-1.007.716-.296.039-.352.571-.297.568.147-.005 1.074-.704 1.506-.555.423.146 1.183-.336 1.48-.582.149-.125.286-.344.483-.344.909 0 2.268.374 2.579.56.474.283-.204.263-.277.447-.058.142-.19.335-.249.412-.102.133-.399.077-.341-.082.059-.167.348-.231-.086-.271-.445-.041-.568-.341-1.014.034-.134.113-.234.286-.321.433-.123.21-.42.201-.544.396-.12.192.07.512.304.371.062-.038.765.645.674.095-.059-.364.196-.612.201-.887.003-.184.28-.066.206.03-.097.121-.203.534.051.554.096.008.339-.158.425-.084-.096-.002-.315.383-.3.376-.108.048-.233-.021-.15.21.074.228-.408.201-.495.247-.037.02-.417-.114-.408-.028-.131-.109.037-.379-.072-.422-.11.168-.058.512-.294.512-.202 0-.482.229-.604.369-.087.097-.609.308-.666.302.299.031.286.25.261.437-.06.433-.995.032-.956.196.038.158-.107.586-.139.724-.029.125.402.205.378.267.002-.007.583-.199.64-.25l.131-.293c.11-.073.226-.133.35-.179l.149-.258c.05-.02.645-.112.686-.092.149.068.428.353.532.483.036.047.227.117.227.188.069.107-.051.148-.006.223.104.193.132-.401.087-.29 0-.189.142.071.174.049l-.657-.654c-.204-.342.543.183.64.247.096.063.285.629.537.501.158-.08-.004-.139.106-.229l.449-.09c-.357.261.279.602.182.556.16.074.254-.058.354-.021.057.022.663.015.566-.082.151.076.082.748-.044.851-.204.169-1.182.1-1.399-.057-.361-.262-.297.279-.473.352-.344.142-.857-.463-1.218-.482.176.026.015-.445.015-.478-.139-.171-1.02.019-1.252.05-.434.058-.89.052-1.223.324-.234.189-.237.5-.477.651-.156.095-.325.064-.456.189-.234.222-.504.552-.637.845-.054.123.072.416.041.574-.307.967.076 2.308 1.248 2.456.25.032.506.144.759.117 1.332-2.88 4.568-4.92 8.347-4.92.932 0 1.831.124 2.678.354-1.105-4.322-5.012-7.521-9.678-7.521-5.523 0-10 4.477-10 10s4.477 10 10 10l.074-.004c-.509-.533-.931-1.128-1.265-1.766zm4.778-13.035c.068-.008-.089.138-.089.138.027.212.183.327.479.435.36.129.03.375-.176.317-.114-.032-.704-.21-.725.021 0 .138-.56.001-.473-.145.061-.098.041-.319.152-.464.16-.21.313-.096.318.026.002.327.332-.306.514-.328zm-4.532-.292c.08.113.688-.163.591-.146.187-.094.024-.104-.082-.159-.035-.179-.065-.456-.177-.566l.074-.085c-.173-.249-.301.302-.301.302l.09-.026-.042.113c.071.129.019.207.007.277l-.124.077c-.045.055.215.062.217.071.009.028-.313.074-.253.142zm-.396-.286c-.069.071.002.116.073.085.104-.045.244-.044.26-.183l.066-.084c.029-.043-.057-.114-.092-.121l-.124.086-.061.016-.056.072.006.04-.072.089zm2.634 2.107c-.055 0-.369.029-.34.084.178.293.403-.076.34-.084z" />
        );
        break;
      case "Code":
        SelectedSvgPath = (
          <path d="M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z" />
        );
        break;
      case "Music":
        SelectedSvgPath = (
          <path d="M12 21h-12v-2h12v2zm4-9l8-1v6.681c-.002 1.555-1.18 2.319-2.257 2.319-.907 0-1.743-.542-1.743-1.61 0-.96.903-1.852 2-2.073v-2.317l-4 .5v4.181c-.002 1.555-1.18 2.319-2.257 2.319-.907 0-1.743-.542-1.743-1.61 0-.96.903-1.852 2-2.073v-5.317zm-4 4.976h-12v-2h12v2zm0-3.976h-12v-2h12v2zm12-4h-24v-2h24v2zm0-4h-24v-2h24v2z" />
        );
        break;
      case "Design":
        SelectedSvgPath = (
          <path d="M8.997 13.985c.01 1.104-.88 2.008-1.986 2.015-1.105.009-2.005-.88-2.011-1.984-.01-1.105.879-2.005 1.982-2.016 1.106-.007 2.009.883 2.015 1.985zm-.978-3.986c-1.104.008-2.008-.88-2.015-1.987-.009-1.103.877-2.004 1.984-2.011 1.102-.01 2.008.877 2.012 1.982.012 1.107-.88 2.006-1.981 2.016zm7.981-4.014c.004 1.102-.881 2.008-1.985 2.015-1.106.01-2.008-.879-2.015-1.983-.011-1.106.878-2.006 1.985-2.015 1.101-.006 2.005.881 2.015 1.983zm-12 15.847c4.587.38 2.944-4.492 7.188-4.537l1.838 1.534c.458 5.537-6.315 6.772-9.026 3.003zm14.065-7.115c1.427-2.239 5.846-9.748 5.846-9.748.353-.623-.429-1.273-.975-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.04 3.995-2.811zm-12.622 4.806c-2.084-1.82-3.42-4.479-3.443-7.447-.044-5.51 4.406-10.03 9.92-10.075 3.838-.021 6.479 1.905 6.496 3.447l1.663-1.456c-1.01-2.223-4.182-4.045-8.176-3.992-6.623.055-11.955 5.466-11.903 12.092.023 2.912 1.083 5.57 2.823 7.635.958.492 2.123.329 2.62-.204zm12.797-1.906c1.059 1.97-1.351 3.37-3.545 3.992-.304.912-.803 1.721-1.374 2.311 5.255-.591 9.061-4.304 6.266-7.889-.459.685-.897 1.197-1.347 1.586z" />
        );
        break;
      case "Why":
        SelectedSvgPath = (
          <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z" />
        );
        break;
      default:
        SelectedSvgPath = (
          <path d="M2.212 8.288c-1.17-.832-1.997-1.955-2.212-3.347.493-.03 1.047-.033 1.52-.172 1.755-.518 2.963-2.798 5.173-2.769 2.076.067 2.742 1.894 3.948 2.353.092.036.215.065.358.089v-.71c-.598-.346-1-.992-1-1.732 0-1.104.896-2 2-2s2 .896 2 2c0 .74-.402 1.386-1 1.732v.71c.144-.023.268-.053.36-.089 1.206-.459 1.872-2.286 3.948-2.353 2.21-.029 3.418 2.251 5.173 2.769.473.139 1.027.142 1.52.172-.215 1.392-1.041 2.514-2.21 3.346-1.148-.504-2.126-1.223-2.964-2.086.234 1.056.767 2.073 1.481 2.913-.697.303-1.454.53-2.237.68-1.015-.791-1.806-1.723-2.51-2.943-.004 1.12.242 2.137.681 3.15-1.107.041-2.217-.068-3.242-.335v6.923c.843.262 1.911.611 2.542 1.201 2.008 1.877.83 4.698-1.539 4.787v-1c1.266-.627 1.504-1.961-1.003-2.878v4.301c0 .553-.448 1-1 1s-1-.447-1-1v-4.896c-1.955-.51-5.364-1.17-5.339-4.003.018-1.696 1.55-3.101 3.331-3.101h.01c.553 0 1 .448 1 1 0 .549-.442.994-.989 1-.836.009-1.392.651-1.349 1.192.098 1.124 2.22 1.556 3.336 1.844v-6.369c-1.023.266-2.13.375-3.234.334.439-1.013.685-2.03.68-3.15-.704 1.22-1.495 2.153-2.511 2.944-.783-.15-1.54-.377-2.237-.679.714-.841 1.248-1.859 1.482-2.915-.838.864-1.818 1.584-2.967 2.087zm5.748 10.077c.863.25 1.655.463 2.35.624-1.691.869-1.495 2.002-.311 2.588v1c-2.138-.08-3.305-2.384-2.039-4.212zm6.073-2.606c.889-.257 2.232-.644 2.305-1.567.043-.543-.516-1.183-1.35-1.192-.547-.006-.989-.451-.989-1 0-.552.448-1 1-1h.011c1.772 0 3.313 1.399 3.33 3.101.017 1.273-.851 2.367-1.986 2.934-.6-.505-1.397-.909-2.321-1.276z" />
        );
        break;
    }

    return (
      <span
        className={className}
        onClick={() => {
          setTransversalData({
            ...transversalData,
            section: `${CElement}Section`,
          });
        }}
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          {SelectedSvgPath}
        </svg>
      </span>
    );
  };

  return (
    <section ref={sectionRef} id="InitSection">
      <div className="InitLogo">
        <svg
          width="348"
          height="141"
          viewBox="0 0 348 141"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
          className="Logo"
        >
          <path
            d="M135.944 10.832C137.096 10.832 137.24 9.82399 136.52 8.52799C135.656 7.376 134.072 6.512 132.776 6.512C114.92 7.52 97.208 8.384 78.488 9.96799C79.352 7.80799 80.216 5.936 81.224 4.352C81.656 3.632 80.504 2.192 79.352 1.32799C77.48 0.176 76.04 0.0319948 75.608 0.607996C74.024 2.768 72.584 6.224 71.288 10.544C55.016 12.128 38.024 14.288 19.592 17.456C18.44 17.6 18.584 18.752 19.304 19.904C20.312 21.056 22.04 21.92 23.192 21.776C38.744 19.04 54.296 17.024 69.848 15.584C63.944 36.752 59.48 71.312 57.896 86.288C57.032 93.344 55.88 107.744 55.88 119.84C37.304 122 18.728 125.312 1.73601 129.344C0.584008 129.632 0.728008 130.784 1.73601 131.936C2.74401 133.088 4.32801 133.808 5.48001 133.664C13.832 131.648 37.016 127.616 55.88 124.88C56.024 130.928 56.456 135.68 57.464 137.84C58.184 138.992 58.616 140 60.2 140.288C61.064 140.288 61.496 139.856 61.352 139.136L60.92 138.416C60.344 133.52 60.056 128.912 60.056 124.304C64.952 123.584 69.272 123.152 73.016 122.72C84.392 121.424 95.912 120.704 106.136 120.704C112.616 120.704 118.232 120.992 123.416 121.712C124.856 121.856 125.432 121.136 124.712 119.84C123.992 118.688 122.408 117.68 121.112 117.392C115.928 116.672 110.312 116.384 103.976 116.384C93.32 116.384 81.224 117.248 69.704 118.4L60.2 119.264C60.632 108.752 62.216 98.672 63.368 88.304C67.112 63.392 71 32.864 76.76 14.864C96.632 13.136 116.36 11.984 135.944 10.832Z"
            strokeWidth={3}
            id="path"
          />
          <path
            d="M169.492 107.744C170.932 109.04 174.244 105.728 174.1 102.128C180.868 83.408 207.94 25.088 215.14 13.856C213.412 30.992 211.684 50.432 211.684 68.144C211.684 72.032 211.828 75.92 211.972 79.664C212.98 99.824 216.436 133.232 232.708 133.232C234.436 133.232 234.148 131.648 233.284 131.36C222.484 127.904 218.02 107.168 217.156 78.8C217.012 75.2 217.012 71.744 217.012 68.144C217.012 50.144 218.452 32.864 220.612 10.544C220.756 7.664 216.724 3.632 214.42 6.65599C208.66 11.552 181.588 70.592 171.652 95.216C165.604 70.448 164.02 43.376 160.708 23.36C160.132 20.624 155.38 17.744 154.948 19.76C154.948 19.904 154.804 20.048 154.948 20.192C154.66 21.92 154.516 24.944 153.94 27.104C145.876 56.192 110.02 129.632 67.8275 116.528C66.3875 116.096 66.5315 117.392 67.6835 118.4C99.7955 133.232 140.98 86.288 157.396 30.56C159.556 55.472 163.732 81.392 169.492 107.744Z"
            strokeWidth={3}
          />
          <path
            d="M282.207 134.96C284.367 135.104 286.384 135.248 288.4 135.248C318.64 135.248 342.255 113.936 346.863 89.6C348.015 83.552 344.704 80.24 344.704 82.4C340.528 107.744 312.592 131.792 287.104 131.792C285.376 131.792 283.504 131.648 281.776 131.36C254.848 127.616 242.608 98.528 243.184 75.92C244.048 42.512 266.943 7.80799 301.359 8.96C318.207 9.536 324.112 19.904 324.112 32.864C324.112 50.576 313.023 72.896 303.087 80.96C302.367 81.536 301.792 82.544 302.656 82.976C303.808 83.552 309.568 80.24 310.432 79.52C320.8 71.168 329.728 51.728 329.728 34.88C329.728 18.896 321.664 5.21599 299.344 5.21599C261.76 5.21599 237.568 43.088 236.992 76.352C236.56 104.72 254.415 132.368 282.207 134.96Z"
            strokeWidth={3}
          />
        </svg>
      </div>

      <div className="outerCircle">
        <div className="innerHiddenCircle">
          <h2>
            Cada círculo tiene información sobre mis diferentes habilidades, haz
            click en uno!
          </h2>
        </div>

        <div
          className="CirclesBoxBox"
          // ref={CirclesBoxRef}
          // config={{
          //   loop: true,
          //   rotateZ: 360,
          //   duration: 10000,
          //   easing: "linear",
          //   autoplay: true,
          // }}
        >
          <div className="CirclesBox">
            {CreateCircle("tcircle", "Med")}
            {CreateCircle("bcircle", "Modeling")}
            {CreateCircle("rcircle", "Xp")}
            {CreateCircle("lcircle", "Lang")}
            {CreateCircle("trcircle", "Code")}
            {CreateCircle("tlcircle", "Music")}
            {CreateCircle("brcircle", "Design")}
            {CreateCircle("blcircle", "Why")}
          </div>
        </div>
      </div>

      <div className="buttonsBox">
        <button className="play" onClick={() => rotatingAnimRef.current.play()}>
          Rotate 🔄
        </button>
        <button
          className="pause"
          onClick={() => rotatingAnimRef.current.pause()}
        >
          Stop ⏸
        </button>
      </div>
    </section>
  );
};

export default InitSection;
