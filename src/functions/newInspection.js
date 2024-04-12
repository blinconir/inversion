import { supabase } from "../supabase";
import { useToast } from "vue-toastification";

const toast = useToast();

async function getUserEmail() {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      toast.error("Error obteniendo email de usuario: ", error.message);
      return;
    }
    return data.user.email;
  } catch (error) {
    console.error("Error obteniendo email de usuario: ", error.message);
    return;
  }
}

const newInspection = async (info, file) => {
  try {
    const { data, error } = await supabase.from("fiscalizacion").insert({
      presencia: info.presencia,
      // timestamp -> autogenerado
      // id -> autogenerado
      date: info.datetime, // fecha y hora
      // time: info.time, -> ya no aplicaría
      firma: info.firma,
      horarios_firma: info.horarios_firma,
      utiliza_epp: info.utiliza_epp,
      supervision_ejecutora: info.supervision_ejecutora,
      observaciones: info.observaciones,
      funcion_contrato: info.funcion_contrato,
      fiscalizador: await getUserEmail(),
      RutSDV: info.RutSDV,
      file: file,
      //   comentario_funcion_contrato: info.comentario_funcion_contrato, -> no por ahora
      comentario_utiliza_epp: info.comentario_utiliza_epp,
      errorDatos: info.errorDatos,
      herramientas: info.herramientas,
      //   condiciones_espacio_laboral: info.condiciones_espacio_laboral, -> no por ahora
      comentario_condiciones_espacio_laboral:
        info.comentario_condiciones_espacio_laboral,
      condiciones_maquinas: info.condiciones_maquinas,
      //   comentario_condiciones_maquinas: info.comentario_condiciones_maquinas, -> no por ahora
      logo_proempleo: info.logo_proempleo,
      comuna: info.comuna,
      region: info.region,
      // firmaImg: info.imagenFirma.value, -> ya no aplicaría
      mes: info.datetime.split("-")[1],
      nombres: info.nombres,
      apellidos: info.apellidos,
      ejecutor: info.ejecutor,
      comentario_herramientas: info.comentario_herramientas,
    });

    toast.success(`Supervisión del RUT ${info.RutSDV} registrada exitosamente`);

    if (error) {
      toast.error("Error registrando supervisión, inténtalo nuevamente");
      // console.error("Error insertando supervisión: ", error.message);
      return;
    }

    return data;
  } catch (error) {
    console.error("Error insertando supervisión");
    return;
  }
};

export { newInspection };
