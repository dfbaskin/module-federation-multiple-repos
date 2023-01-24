import "./styles.scss";
import "./app/app.element.ts";

setTimeout(() => {
  import("interop-app").catch((err) => {
    console.error(err);
  });
});
