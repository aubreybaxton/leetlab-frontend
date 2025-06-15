import React from 'react';
import { useForm, useFieldArray, Controller} from 'react-hook-form';
import {zodResolver} from "@hookform/resolvers/zod";
import {
  Plus,
  Trash2,
  Code2,
  FileText,
  Lightbulb,
  BookOpen,
  CheckCircle2,
  Download,
} from "lucide-react";
import Editor from "@monaco-editor/react";
import { useState } from 'react';
import {axiosInstance} from "../libs/axios.js"
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import { addProblemSchema } from '../page/schema/Schema.jsx';

function CreateProblemForm() {

  const { register, control,handleSubmit, reset, formState:{errors}}= useForm({resolver:zodResolver(addProblemSchema)})
  return (
    <div>CreateProblemForm
      <div>
        
      </div>
    </div>
  )
}

export default CreateProblemForm