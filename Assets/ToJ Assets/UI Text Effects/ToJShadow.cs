using UnityEngine;
using System.Collections.Generic;
using UnityEngine.UI;

[AddComponentMenu("UI/ToJ Effects/ToJ Shadow", 14)]
public class ToJShadow : BaseMeshEffect
{
    [SerializeField]
    private Color m_EffectColor = new Color(0f, 0f, 0f, 0.5f);

    [SerializeField]
    private Vector2 m_EffectDistance = new Vector2(1f, -1f);

    [SerializeField]
    private bool m_UseGraphicAlpha = true;

	private List<UIVertex> m_Verts = new List<UIVertex>();

	protected ToJShadow ()
    {}

	#if UNITY_EDITOR
    protected override void OnValidate ()
    {
        effectDistance = m_EffectDistance;
        base.OnValidate();
    }
	#endif

    public Color effectColor
    {
        get { return m_EffectColor; }
        set
        {
            m_EffectColor = value;
            if (graphic != null)
                graphic.SetVerticesDirty();
        }
    }

    public Vector2 effectDistance
    {
        get { return m_EffectDistance; }
        set
        {
            if (value.x > 600)
                value.x = 600;
            if (value.x < -600)
                value.x = -600;

            if (value.y > 600)
                value.y = 600;
            if (value.y < -600)
                value.y = -600;

            if (m_EffectDistance == value)
                return;

            m_EffectDistance = value;

            if (graphic != null)
                graphic.SetVerticesDirty();
        }
    }

    public bool useGraphicAlpha
    {
        get { return m_UseGraphicAlpha; }
        set
        {
            m_UseGraphicAlpha = value;
            if (graphic != null)
                graphic.SetVerticesDirty();
        }
    }

    protected void ApplyShadowZeroAlloc (List<UIVertex> verts, Color32 color, int start, int end, float x, float y)
    {
        UIVertex vt;

        var neededCpacity = verts.Count * 2;
        if (verts.Capacity < neededCpacity)
            verts.Capacity = neededCpacity;

        for (int i = start; i < end; ++i)
        {
            vt = verts[i];
            verts.Add(vt);

            Vector3 v = vt.position;
            v.x += x;
            v.y += y;
            vt.position = v;
            var newColor = color;
            if (m_UseGraphicAlpha)
                newColor.a = (byte)((newColor.a * verts[i].color.a) / 255);
            vt.color = newColor;
            verts[i] = vt;
        }
    }

    protected void ApplyShadow (List<UIVertex> verts, Color32 color, int start, int end, float x, float y)
    {
        var neededCpacity = verts.Count * 2;
        if (verts.Capacity < neededCpacity)
            verts.Capacity = neededCpacity;

        ApplyShadowZeroAlloc(verts, color, start, end, x, y);
    }

    public override void ModifyMesh (VertexHelper vh)
    {
        if (!IsActive())
            return;

		vh.GetUIVertexStream(m_Verts);

		int initialVertexCount = m_Verts.Count;

		ApplyShadow(m_Verts, effectColor, 0, m_Verts.Count, effectDistance.x, effectDistance.y);


		Text textComponent = GetComponent<Text>();
		if ((textComponent != null) && (textComponent.material.shader == Shader.Find("Text Effects/Fancy Text")))
		{
			for (int i = 0; i < m_Verts.Count - initialVertexCount; i++)
			{
				UIVertex vert = m_Verts[i];
				vert.uv1 = new Vector2(0, 0);
				m_Verts[i] = vert;
			}
		}

        vh.Clear();
		vh.AddUIVertexTriangleStream(m_Verts);
    }
}