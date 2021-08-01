export default function({ store, redirect }) {
  if (!store.getters.userExist) {
    return redirect("/");
  }
}
