# useState

3 ta bisoy for useState er khetre ->

useState<wchich type will be accept>(which value set initial);

like -
const [loading, setLoading] = useState()

Here, loading will be true / false, and initial value is true.
so its type boolean.

const [loading, setLoading] = useState<boolean>(true);

Another Example, like -
const [employee, setEmployee] = useState();

Here, employee is arrayOfobject, so its defined interface. type like that -IEmployee, and initial value is empty array.

const [employee, setEmployee] = useState<Employee[]>([])

single employee initial value should be null.

const [employee, setEmployee] = useState<Employee | null>(null)
