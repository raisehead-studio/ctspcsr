import { useSpring, animated } from "@react-spring/web";

import style from "./styles.module.scss";

export default function RunningNumbers(props: {
  n: number;
  c: string;
  to_fixed: number;
  is_currency: boolean;
  is_table?: boolean;
  c_ahead?: string;
  is_trillion?: boolean;
}) {
  const { n, c, c_ahead, to_fixed, is_currency, is_table, is_trillion } = props;
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  function toCurrency(num: string) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  if (is_table) {
    return (
      <animated.div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: "0px",
          gap: "10px",
        }}>
        {c_ahead && <span style={{ fontSize: "12px" }}>{c_ahead}</span>}
        {is_trillion && (
          <span
            style={{
              fontSize: "33px",
              padding: "0px 2px",
              transform: "translateY(12px)",
            }}>
            1兆{" "}
          </span>
        )}
        <animated.p
          style={{
            margin: "0px",
          }}>
          {!is_currency
            ? number.to((n) => n.toFixed(to_fixed))
            : number.to((n) => toCurrency(n.toFixed(to_fixed)))}
        </animated.p>
        <span style={{ fontSize: "12px" }}>{c}</span>
      </animated.div>
    );
  }

  return (
    <animated.div className={style.data_value}>
      {c_ahead && (
        <span style={{ transform: "translateX(-5px)" }}>{c_ahead}</span>
      )}
      {is_trillion && (
        <p style={{ fontSize: "33px", padding: "0px 2px" }}>1兆 </p>
      )}
      <animated.p>
        {!is_currency
          ? number.to((n) => n.toFixed(to_fixed))
          : number.to((n) => toCurrency(n.toFixed(to_fixed)))}
      </animated.p>
      <span>{c}</span>
    </animated.div>
  );
}
