import ButtonPrimary from "~/components/layout/ButtonPrimary";
import { useNavigate, useOutletContext } from "remix";
import Steps from "~/components/layout/Steps";
import { AppContextType } from "~/root";
import Debug from "~/components/layout/Debug";

export default function Index() {
  let navigate = useNavigate();

  const { gender, questionnaire } = useOutletContext<AppContextType>();

  return (
    <>
      <Steps
        className="mb-6"
        step1="current"
        step2="upcoming"
        step3="upcoming"
      />
      <section className="prose mb-3">
        <h2>Welcome...</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed
          viverra tellus in hac. Volutpat commodo sed egestas egestas fringilla
          phasellus. Amet venenatis urna cursus eget nunc scelerisque viverra
          mauris. Egestas egestas fringilla phasellus faucibus scelerisque
          eleifend donec pretium vulputate. Morbi tristique senectus et netus.
          Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque
          habitant. Dui nunc mattis enim ut tellus elementum sagittis. Tellus
          molestie nunc non blandit massa enim nec dui. Purus non enim praesent
          elementum facilisis leo vel fringilla. Amet risus nullam eget felis
          eget nunc. Feugiat nibh sed pulvinar proin gravida hendrerit lectus a.
          Nibh sed pulvinar proin gravida hendrerit lectus. Mauris nunc congue
          nisi vitae. Mi proin sed libero enim sed faucibus turpis in eu. Nunc
          vel risus commodo viverra. Sodales ut eu sem integer vitae justo eget.
          Ut faucibus pulvinar elementum integer enim neque volutpat ac. Congue
          quisque egestas diam in arcu cursus. Dui nunc mattis enim ut tellus.
        </p>
      </section>
      <div className="flex space-x-2 border-t pt-5">
        <ButtonPrimary
          label="Start questionnaire"
          onClick={() => navigate("/questionnaire")}
        />
      </div>
      <Debug questionnaire={questionnaire} gender={gender} />
    </>
  );
}
